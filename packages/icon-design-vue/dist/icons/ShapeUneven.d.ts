import type { DefineComponent } from 'vue';

export interface ShapeUnevenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShapeUneven: DefineComponent<ShapeUnevenProps>;

export default ShapeUneven;
export { ShapeUneven };
