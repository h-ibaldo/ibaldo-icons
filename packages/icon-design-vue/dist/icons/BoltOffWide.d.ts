import type { DefineComponent } from 'vue';

export interface BoltOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoltOffWide: DefineComponent<BoltOffWideProps>;

export default BoltOffWide;
export { BoltOffWide };
