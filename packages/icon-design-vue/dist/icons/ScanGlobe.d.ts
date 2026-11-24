import type { DefineComponent } from 'vue';

export interface ScanGlobeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanGlobe: DefineComponent<ScanGlobeProps>;

export default ScanGlobe;
export { ScanGlobe };
