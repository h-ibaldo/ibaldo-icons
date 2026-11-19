import type { DefineComponent } from 'vue';

export interface FlameTriangleCurledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlameTriangleCurled: DefineComponent<FlameTriangleCurledProps>;

export default FlameTriangleCurled;
export { FlameTriangleCurled };
