import type { DefineComponent } from 'vue';

export interface GaugeDropSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDropSquare: DefineComponent<GaugeDropSquareProps>;

export default GaugeDropSquare;
export { GaugeDropSquare };
