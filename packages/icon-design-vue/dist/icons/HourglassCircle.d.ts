import type { DefineComponent } from 'vue';

export interface HourglassCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCircle: DefineComponent<HourglassCircleProps>;

export default HourglassCircle;
export { HourglassCircle };
