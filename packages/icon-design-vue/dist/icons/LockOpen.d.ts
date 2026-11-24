import type { DefineComponent } from 'vue';

export interface LockOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpen: DefineComponent<LockOpenProps>;

export default LockOpen;
export { LockOpen };
