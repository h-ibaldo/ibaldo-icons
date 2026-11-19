import type { DefineComponent } from 'vue';

export interface BellClockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellClockWide: DefineComponent<BellClockWideProps>;

export default BellClockWide;
export { BellClockWide };
