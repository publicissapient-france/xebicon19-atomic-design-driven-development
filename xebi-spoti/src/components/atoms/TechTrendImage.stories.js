import TechTrendImage from './TechTrendImage';

export default {title: 'Atoms/TechTrendImage'};

export const withImage = () => ({
  components: {TechTrendImage},
  template: '<TechTrendImage src="https://picsum.photos/id/995/300/300"/>',
});
