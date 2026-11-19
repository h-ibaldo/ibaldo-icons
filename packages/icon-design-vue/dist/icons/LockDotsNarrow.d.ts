import type { DefineComponent } from 'vue';

export interface LockDotsNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockDotsNarrow: DefineComponent<LockDotsNarrowProps>;

export default LockDotsNarrow;
export { LockDotsNarrow };
