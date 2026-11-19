import type { DefineComponent } from 'vue';

export interface LockCheckNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckNarrow: DefineComponent<LockCheckNarrowProps>;

export default LockCheckNarrow;
export { LockCheckNarrow };
