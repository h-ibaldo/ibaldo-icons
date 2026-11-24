import type { DefineComponent } from 'vue';

export interface LockCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheck: DefineComponent<LockCheckProps>;

export default LockCheck;
export { LockCheck };
