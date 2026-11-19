import type { DefineComponent } from 'vue';

export interface FlameTriangleDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlameTriangleDrop: DefineComponent<FlameTriangleDropProps>;

export default FlameTriangleDrop;
export { FlameTriangleDrop };
