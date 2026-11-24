import type { DefineComponent } from 'vue';

export interface KeySkeletonFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeySkeletonFlipped: DefineComponent<KeySkeletonFlippedProps>;

export default KeySkeletonFlipped;
export { KeySkeletonFlipped };
