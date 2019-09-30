import TechTrendCategory from './TechTrendCategory';

export default {title: 'Organisms/TechTrendCategory'};

const title = 'Tech Trends #1';
const subtitle = 'From Tech to Trends and beyond';

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

export const withTechTrendsTitleAndSubtitle = () => ({
  components: {TechTrendCategory},
  data() {
    return {
      techTrends,
      title,
      subtitle,
    };
  },
  template: '<TechTrendCategory :techTrends="techTrends" :title="title" :subtitle="subtitle"/>',
});
