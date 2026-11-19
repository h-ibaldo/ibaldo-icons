import type { DefineComponent } from 'vue';

export interface TriangleOffSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleOffSmall: DefineComponent<TriangleOffSmallProps>;

export default TriangleOffSmall;
export { TriangleOffSmall };
