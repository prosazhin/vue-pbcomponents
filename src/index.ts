import { App } from 'vue';
import * as components from '@/components';
import '@/assets/index.css';

export default {
  install: (app: App) => {
    for (const key in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      app.component(key, components[key]);
    }
  },
};

export * from './components';
