import type { DefineComponent } from 'vue';

export interface ReceiptListWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptListWavy: DefineComponent<ReceiptListWavyProps>;

export default ReceiptListWavy;
export { ReceiptListWavy };
