import type { DefineComponent } from 'vue';

export interface QrCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QrCode: DefineComponent<QrCodeProps>;

export default QrCode;
export { QrCode };
