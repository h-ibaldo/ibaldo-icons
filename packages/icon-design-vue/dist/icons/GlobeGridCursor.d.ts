import type { DefineComponent } from 'vue';

export interface GlobeGridCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGridCursor: DefineComponent<GlobeGridCursorProps>;

export default GlobeGridCursor;
export { GlobeGridCursor };
