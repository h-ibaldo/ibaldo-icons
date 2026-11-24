import type { DefineComponent } from 'vue';

export interface GaugeArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeArrowRight: DefineComponent<GaugeArrowRightProps>;

export default GaugeArrowRight;
export { GaugeArrowRight };
