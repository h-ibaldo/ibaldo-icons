import type { DefineComponent } from 'vue';

export interface CursorSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorSquare: DefineComponent<CursorSquareProps>;

export default CursorSquare;
export { CursorSquare };
