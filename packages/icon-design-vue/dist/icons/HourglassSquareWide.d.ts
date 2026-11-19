import type { DefineComponent } from 'vue';

export interface HourglassSquareWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSquareWide: DefineComponent<HourglassSquareWideProps>;

export default HourglassSquareWide;
export { HourglassSquareWide };
