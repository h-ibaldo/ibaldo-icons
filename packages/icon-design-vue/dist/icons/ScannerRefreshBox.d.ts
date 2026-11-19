import type { DefineComponent } from 'vue';

export interface ScannerRefreshBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshBox: DefineComponent<ScannerRefreshBoxProps>;

export default ScannerRefreshBox;
export { ScannerRefreshBox };
