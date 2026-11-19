import type { DefineComponent } from 'vue';

export interface ArrowSyncClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwise: DefineComponent<ArrowSyncClockwiseProps>;

export default ArrowSyncClockwise;
export { ArrowSyncClockwise };
