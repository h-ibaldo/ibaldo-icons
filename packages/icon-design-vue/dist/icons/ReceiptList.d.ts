import type { DefineComponent } from 'vue';

export interface ReceiptListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptList: DefineComponent<ReceiptListProps>;

export default ReceiptList;
export { ReceiptList };
