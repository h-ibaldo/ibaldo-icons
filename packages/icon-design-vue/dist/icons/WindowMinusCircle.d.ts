import type { DefineComponent } from 'vue';

export interface WindowMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinusCircle: DefineComponent<WindowMinusCircleProps>;

export default WindowMinusCircle;
export { WindowMinusCircle };
