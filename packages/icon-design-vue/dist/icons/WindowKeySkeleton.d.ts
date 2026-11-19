import type { DefineComponent } from 'vue';

export interface WindowKeySkeletonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeySkeleton: DefineComponent<WindowKeySkeletonProps>;

export default WindowKeySkeleton;
export { WindowKeySkeleton };
