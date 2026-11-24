import type { DefineComponent } from 'vue';

export interface ArrowSyncDiamondProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowSyncDiamond: DefineComponent<ArrowSyncDiamondProps>;

export default ArrowSyncDiamond;
export { ArrowSyncDiamond };
