import type { DefineComponent } from 'vue';

export interface WindowLightbulbCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLightbulbCenter: DefineComponent<WindowLightbulbCenterProps>;

export default WindowLightbulbCenter;
export { WindowLightbulbCenter };
