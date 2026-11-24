import type { DefineComponent } from 'vue';

export interface LockCheckSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckSharp: DefineComponent<LockCheckSharpProps>;

export default LockCheckSharp;
export { LockCheckSharp };
