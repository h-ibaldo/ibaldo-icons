import type { DefineComponent } from 'vue';

export interface WindowLightbulbBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLightbulbBare: DefineComponent<WindowLightbulbBareProps>;

export default WindowLightbulbBare;
export { WindowLightbulbBare };
