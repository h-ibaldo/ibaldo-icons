import type { DefineComponent } from 'vue';

export interface ScannerRefreshPaperProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshPaper: DefineComponent<ScannerRefreshPaperProps>;

export default ScannerRefreshPaper;
export { ScannerRefreshPaper };
