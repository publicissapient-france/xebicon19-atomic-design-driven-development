import {shallowMount} from '@vue/test-utils';
import TechTrendImage from './TechTrendImage';

describe('TechTrendImage', () => {
  it('should have src and an alt', () => {
    const wrapper = shallowMount(TechTrendImage, {
      propsData: {src: 'http://img.img', alt: 'img alt'},
    });
    const img = wrapper.find('img');
    expect(img.attributes().src).toBe('http://img.img');
    expect(img.attributes().alt).toBe('img alt');
  });
});
