import type { DefineComponent } from 'vue';

export interface ShapeMixProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShapeMix: DefineComponent<ShapeMixProps>;

export default ShapeMix;
export { ShapeMix };
