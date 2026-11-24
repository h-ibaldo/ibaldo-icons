import type { DefineComponent } from 'vue';

export interface SunSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSettings: DefineComponent<SunSettingsProps>;

export default SunSettings;
export { SunSettings };
