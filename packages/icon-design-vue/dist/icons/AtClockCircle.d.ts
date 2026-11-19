import type { DefineComponent } from 'vue';

export interface AtClockCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtClockCircle: DefineComponent<AtClockCircleProps>;

export default AtClockCircle;
export { AtClockCircle };
