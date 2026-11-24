import type { DefineComponent } from 'vue';

export interface LockRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockRefresh: DefineComponent<LockRefreshProps>;

export default LockRefresh;
export { LockRefresh };
