import type { DefineComponent } from 'vue';

export interface PaintbrushVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintbrushVertical: DefineComponent<PaintbrushVerticalProps>;

export default PaintbrushVertical;
export { PaintbrushVertical };
