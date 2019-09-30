import TechTrendImage from './TechTrendImage';

export default {title: 'Atoms/TechTrendImage'};

export const withImage = () => ({
  components: {TechTrendImage},
  template: '<TechTrendImage src="https://xebia-france.github.io/xebicon19-atomic-design-driven-development/app/assets/tt-mobile.webp"/>',
});
