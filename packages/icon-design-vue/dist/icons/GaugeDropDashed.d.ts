import type { DefineComponent } from 'vue';

export interface GaugeDropDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDropDashed: DefineComponent<GaugeDropDashedProps>;

export default GaugeDropDashed;
export { GaugeDropDashed };
