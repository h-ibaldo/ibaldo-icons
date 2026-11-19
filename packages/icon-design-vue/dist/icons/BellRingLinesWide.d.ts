import type { DefineComponent } from 'vue';

export interface BellRingLinesWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLinesWide: DefineComponent<BellRingLinesWideProps>;

export default BellRingLinesWide;
export { BellRingLinesWide };
