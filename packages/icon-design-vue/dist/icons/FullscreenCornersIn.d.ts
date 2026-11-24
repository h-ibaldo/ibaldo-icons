import type { DefineComponent } from 'vue';

export interface FullscreenCornersInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenCornersIn: DefineComponent<FullscreenCornersInProps>;

export default FullscreenCornersIn;
export { FullscreenCornersIn };
