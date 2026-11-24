import type { DefineComponent } from 'vue';

export interface BrushProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Brush: DefineComponent<BrushProps>;

export default Brush;
export { Brush };
