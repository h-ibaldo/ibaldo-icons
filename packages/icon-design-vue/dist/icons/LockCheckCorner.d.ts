import type { DefineComponent } from 'vue';

export interface LockCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckCorner: DefineComponent<LockCheckCornerProps>;

export default LockCheckCorner;
export { LockCheckCorner };
