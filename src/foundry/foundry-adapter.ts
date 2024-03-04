import { CONSTANTS } from 'src/constants';
import { CucuSetting } from 'src/types/types';

const FoundryAdapter = {
  registerCucuSetting(key: string, setting: CucuSetting): void {
    game.settings.register(CONSTANTS.MODULE_ID, key, setting);
  },

  i18n(key: string): string {
    return game.settings.localize(key);
  },
  getCucuSetting(key: string): string {
    return game.settings.get(key);
  },
};

export { FoundryAdapter as fvtt };
