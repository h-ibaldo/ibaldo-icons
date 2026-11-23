import type { DefineComponent } from 'vue';

export interface VectorSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VectorSquare: DefineComponent<VectorSquareProps>;

export default VectorSquare;
export { VectorSquare };
