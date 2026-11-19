import type { DefineComponent } from 'vue';

export interface BellXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXWide: DefineComponent<BellXWideProps>;

export default BellXWide;
export { BellXWide };
