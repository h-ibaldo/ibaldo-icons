import type { DefineComponent } from 'vue';

export interface LockRefreshSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockRefreshSmall: DefineComponent<LockRefreshSmallProps>;

export default LockRefreshSmall;
export { LockRefreshSmall };
