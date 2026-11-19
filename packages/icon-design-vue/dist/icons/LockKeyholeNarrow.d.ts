import type { DefineComponent } from 'vue';

export interface LockKeyholeNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockKeyholeNarrow: DefineComponent<LockKeyholeNarrowProps>;

export default LockKeyholeNarrow;
export { LockKeyholeNarrow };
