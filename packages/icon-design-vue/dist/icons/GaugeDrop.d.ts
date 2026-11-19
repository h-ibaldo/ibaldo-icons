import type { DefineComponent } from 'vue';

export interface GaugeDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDrop: DefineComponent<GaugeDropProps>;

export default GaugeDrop;
export { GaugeDrop };
