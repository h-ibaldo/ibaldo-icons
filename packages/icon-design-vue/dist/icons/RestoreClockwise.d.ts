import type { DefineComponent } from 'vue';

export interface RestoreClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RestoreClockwise: DefineComponent<RestoreClockwiseProps>;

export default RestoreClockwise;
export { RestoreClockwise };
