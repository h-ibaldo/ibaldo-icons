import type { DefineComponent } from 'vue';

export interface DivideSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DivideSquare: DefineComponent<DivideSquareProps>;

export default DivideSquare;
export { DivideSquare };
