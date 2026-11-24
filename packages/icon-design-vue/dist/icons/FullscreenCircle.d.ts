import type { DefineComponent } from 'vue';

export interface FullscreenCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenCircle: DefineComponent<FullscreenCircleProps>;

export default FullscreenCircle;
export { FullscreenCircle };
