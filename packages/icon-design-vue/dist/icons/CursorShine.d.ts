import type { DefineComponent } from 'vue';

export interface CursorShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorShine: DefineComponent<CursorShineProps>;

export default CursorShine;
export { CursorShine };
