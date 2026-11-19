import type { DefineComponent } from 'vue';

export interface LockOpenCheckNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckNarrow: DefineComponent<LockOpenCheckNarrowProps>;

export default LockOpenCheckNarrow;
export { LockOpenCheckNarrow };
