import type { DefineComponent } from 'vue';

export interface SquareCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareCheckCircle: DefineComponent<SquareCheckCircleProps>;

export default SquareCheckCircle;
export { SquareCheckCircle };
