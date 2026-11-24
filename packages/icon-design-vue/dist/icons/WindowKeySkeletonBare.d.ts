import type { DefineComponent } from 'vue';

export interface WindowKeySkeletonBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeySkeletonBare: DefineComponent<WindowKeySkeletonBareProps>;

export default WindowKeySkeletonBare;
export { WindowKeySkeletonBare };
