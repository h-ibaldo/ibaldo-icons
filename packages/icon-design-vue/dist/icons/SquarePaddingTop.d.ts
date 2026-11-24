import type { DefineComponent } from 'vue';

export interface SquarePaddingTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingTop: DefineComponent<SquarePaddingTopProps>;

export default SquarePaddingTop;
export { SquarePaddingTop };
