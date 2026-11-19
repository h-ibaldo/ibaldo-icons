import type { DefineComponent } from 'vue';

export interface ArrowCounterclockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwise: DefineComponent<ArrowCounterclockwiseProps>;

export default ArrowCounterclockwise;
export { ArrowCounterclockwise };
