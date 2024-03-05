import { fvtt } from 'src/foundry/foundry-adapter';
import type { CucuSettings } from 'src/types/types';

const cucuSettings = {
  testsetting: {
    data: {
      name: 'CUCU.Helloworld.name',
      hint: 'CUCU.Helloworld.hint',
      scope: 'world',
      default: false,
      config: true,
      type: Boolean,
      requiresReload: false,
    },
    get(): any {
      return fvtt.getCucuSetting('testsetting');
    },
  },
} satisfies CucuSettings;

export function initSettings() {
  for (let setting of Object.entries(cucuSettings)) {
    fvtt.registerCucuSetting(setting[0], setting[1].data);
  }
}
