import type { DefineComponent } from 'vue';

export interface ScannerRefreshFrontProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshFront: DefineComponent<ScannerRefreshFrontProps>;

export default ScannerRefreshFront;
export { ScannerRefreshFront };
