import type { DefineComponent } from 'vue';

export interface SquareStackSquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackSquareDashed: DefineComponent<SquareStackSquareDashedProps>;

export default SquareStackSquareDashed;
export { SquareStackSquareDashed };
