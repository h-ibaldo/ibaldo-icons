import type { DefineComponent } from 'vue';

export interface ShapeNestedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ShapeNested: DefineComponent<ShapeNestedProps>;

export default ShapeNested;
export { ShapeNested };
