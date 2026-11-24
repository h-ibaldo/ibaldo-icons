import type { DefineComponent } from 'vue';

export interface SquareRoundCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareRoundCorner: DefineComponent<SquareRoundCornerProps>;

export default SquareRoundCorner;
export { SquareRoundCorner };
