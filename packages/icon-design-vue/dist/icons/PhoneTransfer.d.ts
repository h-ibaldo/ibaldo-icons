import type { DefineComponent } from 'vue';

export interface PhoneTransferProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneTransfer: DefineComponent<PhoneTransferProps>;

export default PhoneTransfer;
export { PhoneTransfer };
