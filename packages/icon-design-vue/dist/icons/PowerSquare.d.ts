import type { DefineComponent } from 'vue';

export interface PowerSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PowerSquare: DefineComponent<PowerSquareProps>;

export default PowerSquare;
export { PowerSquare };
