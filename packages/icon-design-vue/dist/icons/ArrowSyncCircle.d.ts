import type { DefineComponent } from 'vue';

export interface ArrowSyncCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCircle: DefineComponent<ArrowSyncCircleProps>;

export default ArrowSyncCircle;
export { ArrowSyncCircle };
