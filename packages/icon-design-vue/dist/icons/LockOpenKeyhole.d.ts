import type { DefineComponent } from 'vue';

export interface LockOpenKeyholeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenKeyhole: DefineComponent<LockOpenKeyholeProps>;

export default LockOpenKeyhole;
export { LockOpenKeyhole };
