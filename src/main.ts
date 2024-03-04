import { initSettings } from "./settings/settings";

Hooks.once('init', () => {
    initSettings();    
});
