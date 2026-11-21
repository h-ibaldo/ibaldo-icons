import type { DefineComponent } from 'vue';

export interface ReceiptRubleWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptRubleWavy: DefineComponent<ReceiptRubleWavyProps>;

export default ReceiptRubleWavy;
export { ReceiptRubleWavy };
