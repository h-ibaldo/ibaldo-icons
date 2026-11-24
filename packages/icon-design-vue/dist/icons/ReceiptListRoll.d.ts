import type { DefineComponent } from 'vue';

export interface ReceiptListRollProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReceiptListRoll: DefineComponent<ReceiptListRollProps>;

export default ReceiptListRoll;
export { ReceiptListRoll };
