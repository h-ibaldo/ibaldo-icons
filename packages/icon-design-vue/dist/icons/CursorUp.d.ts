import type { DefineComponent } from 'vue';

export interface CursorUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorUp: DefineComponent<CursorUpProps>;

export default CursorUp;
export { CursorUp };
