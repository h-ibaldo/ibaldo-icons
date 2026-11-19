import type { DefineComponent } from 'vue';

export interface BoltWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoltWide: DefineComponent<BoltWideProps>;

export default BoltWide;
export { BoltWide };
