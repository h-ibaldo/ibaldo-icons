import type { DefineComponent } from 'vue';

export interface LockDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockDots: DefineComponent<LockDotsProps>;

export default LockDots;
export { LockDots };
