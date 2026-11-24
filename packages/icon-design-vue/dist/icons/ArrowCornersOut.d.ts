import type { DefineComponent } from 'vue';

export interface ArrowCornersOutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowCornersOut: DefineComponent<ArrowCornersOutProps>;

export default ArrowCornersOut;
export { ArrowCornersOut };
