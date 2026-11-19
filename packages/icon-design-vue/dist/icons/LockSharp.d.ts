import type { DefineComponent } from 'vue';

export interface LockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockSharp: DefineComponent<LockSharpProps>;

export default LockSharp;
export { LockSharp };
