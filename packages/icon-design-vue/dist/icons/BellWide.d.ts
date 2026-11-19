import type { DefineComponent } from 'vue';

export interface BellWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellWide: DefineComponent<BellWideProps>;

export default BellWide;
export { BellWide };
