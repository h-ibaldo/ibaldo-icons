import type { DefineComponent } from 'vue';

export interface LockEyeCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEyeCorner: DefineComponent<LockEyeCornerProps>;

export default LockEyeCorner;
export { LockEyeCorner };
