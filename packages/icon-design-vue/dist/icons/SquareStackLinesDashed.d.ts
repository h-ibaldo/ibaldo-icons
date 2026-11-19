import type { DefineComponent } from 'vue';

export interface SquareStackLinesDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLinesDashed: DefineComponent<SquareStackLinesDashedProps>;

export default SquareStackLinesDashed;
export { SquareStackLinesDashed };
