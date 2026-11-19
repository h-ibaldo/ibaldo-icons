import type { DefineComponent } from 'vue';

export interface GlobeGridCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGridCurved: DefineComponent<GlobeGridCurvedProps>;

export default GlobeGridCurved;
export { GlobeGridCurved };
