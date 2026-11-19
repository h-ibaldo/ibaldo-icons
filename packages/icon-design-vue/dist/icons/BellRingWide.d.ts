import type { DefineComponent } from 'vue';

export interface BellRingWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingWide: DefineComponent<BellRingWideProps>;

export default BellRingWide;
export { BellRingWide };
