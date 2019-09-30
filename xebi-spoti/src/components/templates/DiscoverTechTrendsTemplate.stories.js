import DiscoverTechTrendsTemplate from './DiscoverTechTrendsTemplate';

export default {title: 'Templates/DiscoverTechTrendsTemplate'};

function title(i) {
  return `Tech Trends #${i}`;
}

function subtitle(i) {
  switch (i % 3) {
    case 0:
      return 'From Tech to Trends and beyond';
    case 1:
      return 'In code we trust';
    case 2:
      return 'Agile or nothing';
  }
}

function image(name) {
  return {
    src: `https://xebia-france.github.io/xebicon19-atomic-design-driven-development/app/assets/tt-${name}.webp`,
  };
}

const techTrends = [
  {title: 'Cloud', image: image('cloud')},
  {title: 'Container', image: image('container')},
  {title: 'Data', image: image('data')},
  {title: 'Mobile', image: image('mobile')},
  {title: 'Studio', image: image('studio')},
];

const ttCategories = [1, 2, 3, 4].map(i => ({techTrends, title: title(i), subtitle: subtitle(i)}));

export const withManyCategories = () => ({
  components: {DiscoverTechTrendsTemplate},
  data() {
    return {
      ttCategories,
    };
  },
  template: '<DiscoverTechTrendsTemplate :ttCategories="ttCategories"/>',
});
