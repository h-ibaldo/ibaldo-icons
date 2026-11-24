import type { DefineComponent } from 'vue';

export interface LockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Lock: DefineComponent<LockProps>;

export default Lock;
export { Lock };
