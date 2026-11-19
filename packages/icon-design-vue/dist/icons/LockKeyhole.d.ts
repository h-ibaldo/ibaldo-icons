import type { DefineComponent } from 'vue';

export interface LockKeyholeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockKeyhole: DefineComponent<LockKeyholeProps>;

export default LockKeyhole;
export { LockKeyhole };
