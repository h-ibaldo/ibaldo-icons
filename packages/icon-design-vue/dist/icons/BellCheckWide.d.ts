import type { DefineComponent } from 'vue';

export interface BellCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckWide: DefineComponent<BellCheckWideProps>;

export default BellCheckWide;
export { BellCheckWide };
