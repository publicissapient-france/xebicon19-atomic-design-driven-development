import TechTrendWithTitle from './TechTrendWithTitle';

export default {title: 'Molecules/TechTrendWithTitle'};

const image = {
  src: 'https://picsum.photos/id/995/300/300',
};

export const withImageAndTitle = () => ({
  components: {TechTrendWithTitle},
  data() {
    return {
      image,
    };
  },
  template: '<TechTrendWithTitle :image="image">DevOps</TechTrendWithTitle>',
});
