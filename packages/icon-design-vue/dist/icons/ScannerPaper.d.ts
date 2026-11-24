import type { DefineComponent } from 'vue';

export interface ScannerPaperProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerPaper: DefineComponent<ScannerPaperProps>;

export default ScannerPaper;
export { ScannerPaper };
