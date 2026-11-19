import type { DefineComponent } from 'vue';

export interface HourglassCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCircleWide: DefineComponent<HourglassCircleWideProps>;

export default HourglassCircleWide;
export { HourglassCircleWide };
