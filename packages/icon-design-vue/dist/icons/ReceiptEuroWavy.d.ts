import type { DefineComponent } from 'vue';

export interface ReceiptEuroWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptEuroWavy: DefineComponent<ReceiptEuroWavyProps>;

export default ReceiptEuroWavy;
export { ReceiptEuroWavy };
