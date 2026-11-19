import type { DefineComponent } from 'vue';

export interface LockNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockNarrow: DefineComponent<LockNarrowProps>;

export default LockNarrow;
export { LockNarrow };
