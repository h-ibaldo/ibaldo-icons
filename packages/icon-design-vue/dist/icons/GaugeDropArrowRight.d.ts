import type { DefineComponent } from 'vue';

export interface GaugeDropArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeDropArrowRight: DefineComponent<GaugeDropArrowRightProps>;

export default GaugeDropArrowRight;
export { GaugeDropArrowRight };
