import type { DefineComponent } from 'vue';

export interface WindowSettingsCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterPlain: DefineComponent<WindowSettingsCenterPlainProps>;

export default WindowSettingsCenterPlain;
export { WindowSettingsCenterPlain };
