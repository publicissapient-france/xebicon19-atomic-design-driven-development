import TechTrendCategory from './TechTrendCategory';

export default {title: 'Organisms/TechTrendCategory'};

const title = 'Tech Trends #1';
const subtitle = 'From Tech to Trends and beyond';

const image = {
  src: 'https://xebia-france.github.io/xebicon19-atomic-design-driven-development/app/tt-data-science.webp',
};

const techTrends = [
  {title: 'DevOps', image},
  {title: 'Mobile', image},
  {title: 'Agile', image},
  {title: 'Data', image},
  {title: 'Back', image},
  {title: 'Cloud', image},
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
