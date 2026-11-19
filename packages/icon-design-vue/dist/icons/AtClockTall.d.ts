import type { DefineComponent } from 'vue';

export interface AtClockTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtClockTall: DefineComponent<AtClockTallProps>;

export default AtClockTall;
export { AtClockTall };
