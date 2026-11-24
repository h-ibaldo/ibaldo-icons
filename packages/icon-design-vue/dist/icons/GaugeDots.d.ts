import type { DefineComponent } from 'vue';

export interface GaugeDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDots: DefineComponent<GaugeDotsProps>;

export default GaugeDots;
export { GaugeDots };
