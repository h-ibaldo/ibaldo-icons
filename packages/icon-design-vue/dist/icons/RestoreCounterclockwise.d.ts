import type { DefineComponent } from 'vue';

export interface RestoreCounterclockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RestoreCounterclockwise: DefineComponent<RestoreCounterclockwiseProps>;

export default RestoreCounterclockwise;
export { RestoreCounterclockwise };
