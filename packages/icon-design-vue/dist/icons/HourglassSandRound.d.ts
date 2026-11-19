import type { DefineComponent } from 'vue';

export interface HourglassSandRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSandRound: DefineComponent<HourglassSandRoundProps>;

export default HourglassSandRound;
export { HourglassSandRound };
