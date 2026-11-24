import type { DefineComponent } from 'vue';

export interface FlameTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlameTriangle: DefineComponent<FlameTriangleProps>;

export default FlameTriangle;
export { FlameTriangle };
