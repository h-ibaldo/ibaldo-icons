import type { DefineComponent } from 'vue';

export interface CursorUpShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorUpShine: DefineComponent<CursorUpShineProps>;

export default CursorUpShine;
export { CursorUpShine };
