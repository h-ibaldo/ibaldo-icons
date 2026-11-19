import type { DefineComponent } from 'vue';

export interface SquareStackXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackX: DefineComponent<SquareStackXProps>;

export default SquareStackX;
export { SquareStackX };
