import type { DefineComponent } from 'vue';

export interface BellXCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellXCircleWide: DefineComponent<BellXCircleWideProps>;

export default BellXCircleWide;
export { BellXCircleWide };
