import type { DefineComponent } from 'vue';

export interface CubeArrowsOutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CubeArrowsOut: DefineComponent<CubeArrowsOutProps>;

export default CubeArrowsOut;
export { CubeArrowsOut };
