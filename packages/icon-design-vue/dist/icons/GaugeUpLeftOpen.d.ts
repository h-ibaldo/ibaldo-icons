import type { DefineComponent } from 'vue';

export interface GaugeUpLeftOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeUpLeftOpen: DefineComponent<GaugeUpLeftOpenProps>;

export default GaugeUpLeftOpen;
export { GaugeUpLeftOpen };
