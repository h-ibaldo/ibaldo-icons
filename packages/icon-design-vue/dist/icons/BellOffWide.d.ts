import type { DefineComponent } from 'vue';

export interface BellOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOffWide: DefineComponent<BellOffWideProps>;

export default BellOffWide;
export { BellOffWide };
