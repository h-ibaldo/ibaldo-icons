import type { DefineComponent } from 'vue';

export interface WindowLightbulbProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLightbulb: DefineComponent<WindowLightbulbProps>;

export default WindowLightbulb;
export { WindowLightbulb };
