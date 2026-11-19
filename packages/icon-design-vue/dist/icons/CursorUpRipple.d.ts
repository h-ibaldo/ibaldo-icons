import type { DefineComponent } from 'vue';

export interface CursorUpRippleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorUpRipple: DefineComponent<CursorUpRippleProps>;

export default CursorUpRipple;
export { CursorUpRipple };
