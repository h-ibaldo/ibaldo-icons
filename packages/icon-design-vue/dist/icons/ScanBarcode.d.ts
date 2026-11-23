import type { DefineComponent } from 'vue';

export interface ScanBarcodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanBarcode: DefineComponent<ScanBarcodeProps>;

export default ScanBarcode;
export { ScanBarcode };
