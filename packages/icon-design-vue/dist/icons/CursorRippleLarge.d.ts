import type { DefineComponent } from 'vue';

export interface CursorRippleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorRippleLarge: DefineComponent<CursorRippleLargeProps>;

export default CursorRippleLarge;
export { CursorRippleLarge };
