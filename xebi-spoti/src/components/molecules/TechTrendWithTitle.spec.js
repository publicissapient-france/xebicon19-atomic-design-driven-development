import {shallowMount} from '@vue/test-utils';
import TechTrendWithTitle from './TechTrendWithTitle';

describe('TechTrendWithTitle', () => {
  it('should have a cover and a title', () => {
    const wrapper = shallowMount(TechTrendWithTitle, {
      propsData: {image: {src: 'http://img.img', alt: 'img alt'}},
      slots: {default: ['Amazing']},
    });
    const cover = wrapper.find('.tt-with-title__image');
    expect(cover.attributes().src).toBe('http://img.img');
    expect(cover.attributes().alt).toBe('img alt');
    expect(wrapper.find('.tt-with-title__title').text()).toBe('Amazing');
  });
});
