import type { DefineComponent } from 'vue';

export interface LockOpenCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenCheck: DefineComponent<LockOpenCheckProps>;

export default LockOpenCheck;
export { LockOpenCheck };
