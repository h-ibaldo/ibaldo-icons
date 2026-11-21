import type { DefineComponent } from 'vue';

export interface ReceiptYenWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptYenWavy: DefineComponent<ReceiptYenWavyProps>;

export default ReceiptYenWavy;
export { ReceiptYenWavy };
