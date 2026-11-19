import type { DefineComponent } from 'vue';

export interface CursorRippleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorRippleSmall: DefineComponent<CursorRippleSmallProps>;

export default CursorRippleSmall;
export { CursorRippleSmall };
