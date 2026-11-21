import type { DefineComponent } from 'vue';

export interface ReceiptPoundWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptPoundWavy: DefineComponent<ReceiptPoundWavyProps>;

export default ReceiptPoundWavy;
export { ReceiptPoundWavy };
