import type { DefineComponent } from 'vue';

export interface BrushThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrushThick: DefineComponent<BrushThickProps>;

export default BrushThick;
export { BrushThick };
