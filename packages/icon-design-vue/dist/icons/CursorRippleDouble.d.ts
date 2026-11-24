import type { DefineComponent } from 'vue';

export interface CursorRippleDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorRippleDouble: DefineComponent<CursorRippleDoubleProps>;

export default CursorRippleDouble;
export { CursorRippleDouble };
