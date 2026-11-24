import type { DefineComponent } from 'vue';

export interface HourglassSandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSand: DefineComponent<HourglassSandProps>;

export default HourglassSand;
export { HourglassSand };
