import type { DefineComponent } from 'vue';

export interface LockEyeSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEyeSharp: DefineComponent<LockEyeSharpProps>;

export default LockEyeSharp;
export { LockEyeSharp };
