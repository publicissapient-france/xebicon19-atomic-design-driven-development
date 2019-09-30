import TechTrendWithTitle from './TechTrendWithTitle';

export default {title: 'Molecules/TechTrendWithTitle'};

const image = {
  src: 'https://xebia-france.github.io/xebicon19-atomic-design-driven-development/app/assets/tt-mobile.webp',
};

export const withImageAndTitle = () => ({
  components: {TechTrendWithTitle},
  data() {
    return {
      image,
    };
  },
  template: '<TechTrendWithTitle :image="image">Mobile</TechTrendWithTitle>',
});
