import type { DefineComponent } from 'vue';

export interface LockOpenSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenSharp: DefineComponent<LockOpenSharpProps>;

export default LockOpenSharp;
export { LockOpenSharp };
