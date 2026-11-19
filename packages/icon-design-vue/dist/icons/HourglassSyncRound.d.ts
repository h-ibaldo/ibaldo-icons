import type { DefineComponent } from 'vue';

export interface HourglassSyncRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSyncRound: DefineComponent<HourglassSyncRoundProps>;

export default HourglassSyncRound;
export { HourglassSyncRound };
