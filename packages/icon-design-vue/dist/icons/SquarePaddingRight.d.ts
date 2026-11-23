import type { DefineComponent } from 'vue';

export interface SquarePaddingRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingRight: DefineComponent<SquarePaddingRightProps>;

export default SquarePaddingRight;
export { SquarePaddingRight };
