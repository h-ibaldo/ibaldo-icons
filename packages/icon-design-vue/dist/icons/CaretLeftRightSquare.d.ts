import type { DefineComponent } from 'vue';

export interface CaretLeftRightSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CaretLeftRightSquare: DefineComponent<CaretLeftRightSquareProps>;

export default CaretLeftRightSquare;
export { CaretLeftRightSquare };
