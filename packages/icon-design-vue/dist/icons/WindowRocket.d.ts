import type { DefineComponent } from 'vue';

export interface WindowRocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowRocket: DefineComponent<WindowRocketProps>;

export default WindowRocket;
export { WindowRocket };
