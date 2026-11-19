import type { DefineComponent } from 'vue';

export interface AtClockBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtClockBoxy: DefineComponent<AtClockBoxyProps>;

export default AtClockBoxy;
export { AtClockBoxy };
