import type { DefineComponent } from 'vue';

export interface PlusSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusSquare: DefineComponent<PlusSquareProps>;

export default PlusSquare;
export { PlusSquare };
