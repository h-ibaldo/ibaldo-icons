import type { DefineComponent } from 'vue';

export interface BellAlertWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellAlertWide: DefineComponent<BellAlertWideProps>;

export default BellAlertWide;
export { BellAlertWide };
