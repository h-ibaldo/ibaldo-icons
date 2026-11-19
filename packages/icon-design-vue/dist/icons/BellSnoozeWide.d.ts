import type { DefineComponent } from 'vue';

export interface BellSnoozeWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSnoozeWide: DefineComponent<BellSnoozeWideProps>;

export default BellSnoozeWide;
export { BellSnoozeWide };
