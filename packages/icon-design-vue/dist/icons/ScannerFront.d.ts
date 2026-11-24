import type { DefineComponent } from 'vue';

export interface ScannerFrontProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerFront: DefineComponent<ScannerFrontProps>;

export default ScannerFront;
export { ScannerFront };
