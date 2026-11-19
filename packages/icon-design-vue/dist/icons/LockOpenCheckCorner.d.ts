import type { DefineComponent } from 'vue';

export interface LockOpenCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckCorner: DefineComponent<LockOpenCheckCornerProps>;

export default LockOpenCheckCorner;
export { LockOpenCheckCorner };
