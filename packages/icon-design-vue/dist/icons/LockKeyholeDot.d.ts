import type { DefineComponent } from 'vue';

export interface LockKeyholeDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockKeyholeDot: DefineComponent<LockKeyholeDotProps>;

export default LockKeyholeDot;
export { LockKeyholeDot };
