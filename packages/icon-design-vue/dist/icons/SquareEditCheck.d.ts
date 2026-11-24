import type { DefineComponent } from 'vue';

export interface SquareEditCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareEditCheck: DefineComponent<SquareEditCheckProps>;

export default SquareEditCheck;
export { SquareEditCheck };
