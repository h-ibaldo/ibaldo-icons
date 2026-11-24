import type { DefineComponent } from 'vue';

export interface WindowSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSquare: DefineComponent<WindowSquareProps>;

export default WindowSquare;
export { WindowSquare };
