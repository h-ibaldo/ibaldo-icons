import type { DefineComponent } from 'vue';

export interface CursorUpSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorUpSharp: DefineComponent<CursorUpSharpProps>;

export default CursorUpSharp;
export { CursorUpSharp };
