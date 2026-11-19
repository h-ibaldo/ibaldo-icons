import type { DefineComponent } from 'vue';

export interface ReceiptDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptDollar: DefineComponent<ReceiptDollarProps>;

export default ReceiptDollar;
export { ReceiptDollar };
