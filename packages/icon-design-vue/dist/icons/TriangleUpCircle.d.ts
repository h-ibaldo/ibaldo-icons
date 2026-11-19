import type { DefineComponent } from 'vue';

export interface TriangleUpCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleUpCircle: DefineComponent<TriangleUpCircleProps>;

export default TriangleUpCircle;
export { TriangleUpCircle };
