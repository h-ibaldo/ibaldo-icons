import type { DefineComponent } from 'vue';

export interface LockEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEye: DefineComponent<LockEyeProps>;

export default LockEye;
export { LockEye };
