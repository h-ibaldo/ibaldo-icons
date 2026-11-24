import type { DefineComponent } from 'vue';

export interface SquarePaddingHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingHorizontal: DefineComponent<SquarePaddingHorizontalProps>;

export default SquarePaddingHorizontal;
export { SquarePaddingHorizontal };
