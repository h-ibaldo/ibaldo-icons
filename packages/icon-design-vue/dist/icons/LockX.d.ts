import type { DefineComponent } from 'vue';

export interface LockXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockX: DefineComponent<LockXProps>;

export default LockX;
export { LockX };
