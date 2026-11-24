import type { DefineComponent } from 'vue';

export interface WindowCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheckCircle: DefineComponent<WindowCheckCircleProps>;

export default WindowCheckCircle;
export { WindowCheckCircle };
