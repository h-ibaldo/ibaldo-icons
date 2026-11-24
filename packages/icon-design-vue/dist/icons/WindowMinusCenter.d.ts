import type { DefineComponent } from 'vue';

export interface WindowMinusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinusCenter: DefineComponent<WindowMinusCenterProps>;

export default WindowMinusCenter;
export { WindowMinusCenter };
