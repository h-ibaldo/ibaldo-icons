import type { DefineComponent } from 'vue';

export interface HourglassSquareRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSquareRound: DefineComponent<HourglassSquareRoundProps>;

export default HourglassSquareRound;
export { HourglassSquareRound };
