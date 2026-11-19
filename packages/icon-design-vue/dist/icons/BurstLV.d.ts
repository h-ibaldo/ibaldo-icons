import type { DefineComponent } from 'vue';

export interface BurstLVProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BurstLV: DefineComponent<BurstLVProps>;

export default BurstLV;
export { BurstLV };
