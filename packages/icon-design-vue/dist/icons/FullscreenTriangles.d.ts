import type { DefineComponent } from 'vue';

export interface FullscreenTrianglesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FullscreenTriangles: DefineComponent<FullscreenTrianglesProps>;

export default FullscreenTriangles;
export { FullscreenTriangles };
