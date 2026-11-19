import type { DefineComponent } from 'vue';

export interface HourglassCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCircleRound: DefineComponent<HourglassCircleRoundProps>;

export default HourglassCircleRound;
export { HourglassCircleRound };
