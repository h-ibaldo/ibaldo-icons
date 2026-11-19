import type { DefineComponent } from 'vue';

export interface BellDotWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellDotWide: DefineComponent<BellDotWideProps>;

export default BellDotWide;
export { BellDotWide };
