import type { DefineComponent } from 'vue';

export interface WindowMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinus: DefineComponent<WindowMinusProps>;

export default WindowMinus;
export { WindowMinus };
