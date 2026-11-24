import type { DefineComponent } from 'vue';

export interface SquarePaddingVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingVertical: DefineComponent<SquarePaddingVerticalProps>;

export default SquarePaddingVertical;
export { SquarePaddingVertical };
