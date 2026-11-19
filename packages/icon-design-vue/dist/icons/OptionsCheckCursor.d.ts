import type { DefineComponent } from 'vue';

export interface OptionsCheckCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsCheckCursor: DefineComponent<OptionsCheckCursorProps>;

export default OptionsCheckCursor;
export { OptionsCheckCursor };
