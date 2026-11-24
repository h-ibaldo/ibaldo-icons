import type { DefineComponent } from 'vue';

export interface BellCheckCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleWide: DefineComponent<BellCheckCircleWideProps>;

export default BellCheckCircleWide;
export { BellCheckCircleWide };
