import type { DefineComponent } from 'vue';

export interface SquareEditMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareEditMinus: DefineComponent<SquareEditMinusProps>;

export default SquareEditMinus;
export { SquareEditMinus };
