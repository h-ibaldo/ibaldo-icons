import type { DefineComponent } from 'vue';

export interface ArrowCornersInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowCornersIn: DefineComponent<ArrowCornersInProps>;

export default ArrowCornersIn;
export { ArrowCornersIn };
