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

const image = {
  src: 'https://picsum.photos/id/995/300/300',
};

const techTrends = [
  {title: 'DevOps', image},
  {title: 'Mobile', image},
  {title: 'Agile', image},
  {title: 'Data', image},
  {title: 'Back', image},
  {title: 'Cloud', image},
];

const ttCategories = [0, 1, 2, 3, 4, 5].map(i => ({techTrends, title: title(i), subtitle: subtitle(i)}));

export const withManyCategories = () => ({
  components: {DiscoverTechTrendsTemplate},
  data() {
    return {
      ttCategories,
    };
  },
  template: '<DiscoverTechTrendsTemplate :ttCategories="ttCategories"/>',
});
