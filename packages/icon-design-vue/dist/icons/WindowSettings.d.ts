import type { DefineComponent } from 'vue';

export interface WindowSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSettings: DefineComponent<WindowSettingsProps>;

export default WindowSettings;
export { WindowSettings };
