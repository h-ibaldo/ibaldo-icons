import type { DefineComponent } from 'vue';

export interface PhoneTransferSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneTransferSharp: DefineComponent<PhoneTransferSharpProps>;

export default PhoneTransferSharp;
export { PhoneTransferSharp };
