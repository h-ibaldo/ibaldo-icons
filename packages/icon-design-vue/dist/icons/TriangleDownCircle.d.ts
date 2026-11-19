import type { DefineComponent } from 'vue';

export interface TriangleDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleDownCircle: DefineComponent<TriangleDownCircleProps>;

export default TriangleDownCircle;
export { TriangleDownCircle };
