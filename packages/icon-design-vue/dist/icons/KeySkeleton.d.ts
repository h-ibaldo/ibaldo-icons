import type { DefineComponent } from 'vue';

export interface KeySkeletonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeySkeleton: DefineComponent<KeySkeletonProps>;

export default KeySkeleton;
export { KeySkeleton };
