import type { DefineComponent } from 'vue';

export interface KeySkeletonSimpleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeySkeletonSimple: DefineComponent<KeySkeletonSimpleProps>;

export default KeySkeletonSimple;
export { KeySkeletonSimple };
