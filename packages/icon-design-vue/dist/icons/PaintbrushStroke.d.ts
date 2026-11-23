import type { DefineComponent } from 'vue';

export interface PaintbrushStrokeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintbrushStroke: DefineComponent<PaintbrushStrokeProps>;

export default PaintbrushStroke;
export { PaintbrushStroke };
