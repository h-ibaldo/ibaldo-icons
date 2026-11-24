import type { DefineComponent } from 'vue';

export interface TriangleLeftCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleLeftCircle: DefineComponent<TriangleLeftCircleProps>;

export default TriangleLeftCircle;
export { TriangleLeftCircle };
