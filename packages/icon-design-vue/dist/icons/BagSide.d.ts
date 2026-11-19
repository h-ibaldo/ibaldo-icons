import type { DefineComponent } from 'vue';

export interface BagSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagSide: DefineComponent<BagSideProps>;

export default BagSide;
export { BagSide };
