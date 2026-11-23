import type { DefineComponent } from 'vue';

export interface PaintbrushVerticalDippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintbrushVerticalDipped: DefineComponent<PaintbrushVerticalDippedProps>;

export default PaintbrushVerticalDipped;
export { PaintbrushVerticalDipped };
