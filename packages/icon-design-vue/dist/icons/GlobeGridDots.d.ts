import type { DefineComponent } from 'vue';

export interface GlobeGridDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeGridDots: DefineComponent<GlobeGridDotsProps>;

export default GlobeGridDots;
export { GlobeGridDots };
