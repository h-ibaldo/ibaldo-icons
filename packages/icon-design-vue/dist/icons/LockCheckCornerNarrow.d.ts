import type { DefineComponent } from 'vue';

export interface LockCheckCornerNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckCornerNarrow: DefineComponent<LockCheckCornerNarrowProps>;

export default LockCheckCornerNarrow;
export { LockCheckCornerNarrow };
