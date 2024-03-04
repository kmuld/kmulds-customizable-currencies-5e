import { fvtt } from 'src/foundry/foundry-adapter';
import type { CucuSettings } from 'src/types/types';

const cucuSettings = {
  testsetting: {
    data: {
      name: 'Cucu.test.setting',
      hint: 'This is a test setting',
      scope: 'world',
      default: false,
      type: Boolean,
      requiresReload: false,
    },
    get(): any {
      return fvtt.getCucuSetting('testsetting');
    },
  },
} satisfies CucuSettings;

export function initSettings() {
  for (let settingKey in Object.keys(cucuSettings)) {
    fvtt.registerCucuSetting(settingKey, Object.values(cucuSettings)[settingKey]);
  }
}
