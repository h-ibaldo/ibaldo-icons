import type { DefineComponent } from 'vue';

export interface HourglassRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassRound: DefineComponent<HourglassRoundProps>;

export default HourglassRound;
export { HourglassRound };
