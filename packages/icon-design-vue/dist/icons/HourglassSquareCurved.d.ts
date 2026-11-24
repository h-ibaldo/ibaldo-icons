import type { DefineComponent } from 'vue';

export interface HourglassSquareCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSquareCurved: DefineComponent<HourglassSquareCurvedProps>;

export default HourglassSquareCurved;
export { HourglassSquareCurved };
