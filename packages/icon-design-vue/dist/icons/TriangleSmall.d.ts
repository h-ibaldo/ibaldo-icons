import type { DefineComponent } from 'vue';

export interface TriangleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleSmall: DefineComponent<TriangleSmallProps>;

export default TriangleSmall;
export { TriangleSmall };
