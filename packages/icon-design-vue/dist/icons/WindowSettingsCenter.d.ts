import type { DefineComponent } from 'vue';

export interface WindowSettingsCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenter: DefineComponent<WindowSettingsCenterProps>;

export default WindowSettingsCenter;
export { WindowSettingsCenter };
