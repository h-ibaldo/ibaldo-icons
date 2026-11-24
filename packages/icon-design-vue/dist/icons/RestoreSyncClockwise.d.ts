import type { DefineComponent } from 'vue';

export interface RestoreSyncClockwiseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RestoreSyncClockwise: DefineComponent<RestoreSyncClockwiseProps>;

export default RestoreSyncClockwise;
export { RestoreSyncClockwise };
