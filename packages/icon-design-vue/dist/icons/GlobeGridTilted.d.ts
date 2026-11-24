import type { DefineComponent } from 'vue';

export interface GlobeGridTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGridTilted: DefineComponent<GlobeGridTiltedProps>;

export default GlobeGridTilted;
export { GlobeGridTilted };
