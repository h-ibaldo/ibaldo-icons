import type { DefineComponent } from 'vue';

export interface LayoutGridShapesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutGridShapes: DefineComponent<LayoutGridShapesProps>;

export default LayoutGridShapes;
export { LayoutGridShapes };
