import type { DefineComponent } from 'vue';

export interface GlobeGridCurvedTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGridCurvedTilted: DefineComponent<GlobeGridCurvedTiltedProps>;

export default GlobeGridCurvedTilted;
export { GlobeGridCurvedTilted };
