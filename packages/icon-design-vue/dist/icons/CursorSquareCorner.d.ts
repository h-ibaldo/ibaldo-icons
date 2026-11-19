import type { DefineComponent } from 'vue';

export interface CursorSquareCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorSquareCorner: DefineComponent<CursorSquareCornerProps>;

export default CursorSquareCorner;
export { CursorSquareCorner };
