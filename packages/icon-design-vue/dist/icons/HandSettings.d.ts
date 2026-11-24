import type { DefineComponent } from 'vue';

export interface HandSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSettings: DefineComponent<HandSettingsProps>;

export default HandSettings;
export { HandSettings };
