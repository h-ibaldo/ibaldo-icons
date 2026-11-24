import type { DefineComponent } from 'vue';

export interface LockXNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockXNarrow: DefineComponent<LockXNarrowProps>;

export default LockXNarrow;
export { LockXNarrow };
