import type { DefineComponent } from 'vue';

export interface LockXSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockXSharp: DefineComponent<LockXSharpProps>;

export default LockXSharp;
export { LockXSharp };
