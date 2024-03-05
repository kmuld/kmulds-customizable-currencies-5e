import { CONSTANTS } from 'src/constants';

const FoundryAdapter = {
  registerCucuSetting(key: string, setting: any): void {
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
