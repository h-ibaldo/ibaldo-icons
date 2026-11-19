import type { DefineComponent } from 'vue';

export interface HourglassStandCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassStandCircle: DefineComponent<HourglassStandCircleProps>;

export default HourglassStandCircle;
export { HourglassStandCircle };
