import type { DefineComponent } from 'vue';

export interface HourglassSandCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSandCurved: DefineComponent<HourglassSandCurvedProps>;

export default HourglassSandCurved;
export { HourglassSandCurved };
