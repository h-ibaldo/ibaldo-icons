import type { DefineComponent } from 'vue';

export interface WindowSettingsCenterNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterNotch: DefineComponent<WindowSettingsCenterNotchProps>;

export default WindowSettingsCenterNotch;
export { WindowSettingsCenterNotch };
