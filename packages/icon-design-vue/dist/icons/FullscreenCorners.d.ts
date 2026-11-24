import type { DefineComponent } from 'vue';

export interface FullscreenCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenCorners: DefineComponent<FullscreenCornersProps>;

export default FullscreenCorners;
export { FullscreenCorners };
