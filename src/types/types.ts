export type CucuSetting = {
  data: {
    name: string;
    hint: string;
    scope: 'world' | 'client';
    default: boolean;
    type: any;
    choices?: any;
    requiresReload: boolean;
    onChange?: (data: any) => void;
  };
  get: () => any;
};

export type CucuSettings = {
  [key: string]: CucuSetting;
};
