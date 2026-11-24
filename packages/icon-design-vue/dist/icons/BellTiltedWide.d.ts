import type { DefineComponent } from 'vue';

export interface BellTiltedWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTiltedWide: DefineComponent<BellTiltedWideProps>;

export default BellTiltedWide;
export { BellTiltedWide };
