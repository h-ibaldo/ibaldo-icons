import type { DefineComponent } from 'vue';

export interface GlobeGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGrid: DefineComponent<GlobeGridProps>;

export default GlobeGrid;
export { GlobeGrid };
