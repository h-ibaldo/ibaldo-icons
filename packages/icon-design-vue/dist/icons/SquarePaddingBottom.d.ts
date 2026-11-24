import type { DefineComponent } from 'vue';

export interface SquarePaddingBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingBottom: DefineComponent<SquarePaddingBottomProps>;

export default SquarePaddingBottom;
export { SquarePaddingBottom };
