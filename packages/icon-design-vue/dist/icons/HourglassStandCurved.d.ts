import type { DefineComponent } from 'vue';

export interface HourglassStandCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassStandCurved: DefineComponent<HourglassStandCurvedProps>;

export default HourglassStandCurved;
export { HourglassStandCurved };
