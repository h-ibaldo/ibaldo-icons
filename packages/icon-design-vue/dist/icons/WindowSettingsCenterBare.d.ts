import type { DefineComponent } from 'vue';

export interface WindowSettingsCenterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterBare: DefineComponent<WindowSettingsCenterBareProps>;

export default WindowSettingsCenterBare;
export { WindowSettingsCenterBare };
