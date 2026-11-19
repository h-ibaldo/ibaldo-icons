import type { DefineComponent } from 'vue';

export interface HourglassCircleCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCircleCurved: DefineComponent<HourglassCircleCurvedProps>;

export default HourglassCircleCurved;
export { HourglassCircleCurved };
