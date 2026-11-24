import type { DefineComponent } from 'vue';

export interface ScanQrCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanQrCode: DefineComponent<ScanQrCodeProps>;

export default ScanQrCode;
export { ScanQrCode };
