import type { DefineComponent } from 'vue';

export interface LockRefreshLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockRefreshLarge: DefineComponent<LockRefreshLargeProps>;

export default LockRefreshLarge;
export { LockRefreshLarge };
