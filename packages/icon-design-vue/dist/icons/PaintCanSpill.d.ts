import type { DefineComponent } from 'vue';

export interface PaintCanSpillProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintCanSpill: DefineComponent<PaintCanSpillProps>;

export default PaintCanSpill;
export { PaintCanSpill };
