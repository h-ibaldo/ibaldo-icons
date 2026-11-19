import type { DefineComponent } from 'vue';

export interface AtClockCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtClockCurved: DefineComponent<AtClockCurvedProps>;

export default AtClockCurved;
export { AtClockCurved };
