import TechTrendCategory from './TechTrendCategory';

export default {title: 'Organisms/TechTrendCategory'};

const title = 'Tech Trends #1';
const subtitle = 'From Tech to Trends and beyond';

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
