import type { DefineComponent } from 'vue';

export interface LockEyeNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEyeNarrow: DefineComponent<LockEyeNarrowProps>;

export default LockEyeNarrow;
export { LockEyeNarrow };
