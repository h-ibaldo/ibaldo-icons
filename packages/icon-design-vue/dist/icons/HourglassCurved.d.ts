import type { DefineComponent } from 'vue';

export interface HourglassCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCurved: DefineComponent<HourglassCurvedProps>;

export default HourglassCurved;
export { HourglassCurved };
