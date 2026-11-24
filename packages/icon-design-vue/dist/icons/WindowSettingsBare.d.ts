import type { DefineComponent } from 'vue';

export interface WindowSettingsBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettingsBare: DefineComponent<WindowSettingsBareProps>;

export default WindowSettingsBare;
export { WindowSettingsBare };
