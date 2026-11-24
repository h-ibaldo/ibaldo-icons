import type { DefineComponent } from 'vue';

export interface GlobeCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeCursor: DefineComponent<GlobeCursorProps>;

export default GlobeCursor;
export { GlobeCursor };
