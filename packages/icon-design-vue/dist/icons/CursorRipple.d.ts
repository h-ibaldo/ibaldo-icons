import type { DefineComponent } from 'vue';

export interface CursorRippleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorRipple: DefineComponent<CursorRippleProps>;

export default CursorRipple;
export { CursorRipple };
