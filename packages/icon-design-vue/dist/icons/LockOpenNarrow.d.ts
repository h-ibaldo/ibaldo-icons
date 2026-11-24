import type { DefineComponent } from 'vue';

export interface LockOpenNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenNarrow: DefineComponent<LockOpenNarrowProps>;

export default LockOpenNarrow;
export { LockOpenNarrow };
