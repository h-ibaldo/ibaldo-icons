import type { DefineComponent } from 'vue';

export interface BellPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellPlusWide: DefineComponent<BellPlusWideProps>;

export default BellPlusWide;
export { BellPlusWide };
