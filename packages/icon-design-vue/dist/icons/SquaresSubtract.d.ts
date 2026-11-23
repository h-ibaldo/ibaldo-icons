import type { DefineComponent } from 'vue';

export interface SquaresSubtractProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquaresSubtract: DefineComponent<SquaresSubtractProps>;

export default SquaresSubtract;
export { SquaresSubtract };
