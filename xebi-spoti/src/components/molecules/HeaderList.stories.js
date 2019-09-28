import HeaderList from './HeaderList';

export default {title: 'Molecules/HeaderList'};

export const withTitle = () => ({
  components: {HeaderList},
  data() {
    return {
      title: 'Tech Trends #1',
    };
  },
  template: '<HeaderList :title="title"></HeaderList>',
});

export const withTitleAndSubtitle = () => ({
  components: {HeaderList},
  data() {
    return {
      title: 'Tech Trends #1',
      subtitle: 'From Tech to Trends and beyond',
    };
  },
  template: '<HeaderList :title="title" :subtitle="subtitle"/>',
});
