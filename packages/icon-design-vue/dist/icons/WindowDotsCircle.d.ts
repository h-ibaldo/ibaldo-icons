import type { DefineComponent } from 'vue';

export interface WindowDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowDotsCircle: DefineComponent<WindowDotsCircleProps>;

export default WindowDotsCircle;
export { WindowDotsCircle };
