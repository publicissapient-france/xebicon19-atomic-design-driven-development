import {configure} from '@storybook/vue';
// noinspection ES6UnusedImports (app styling)
import App from '../src/App';

configure(require.context('../src', true, /\.stories\.js$/), module);
