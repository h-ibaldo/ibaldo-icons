import type { DefineComponent } from 'vue';

export interface ScannerBoxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerBox: DefineComponent<ScannerBoxProps>;

export default ScannerBox;
export { ScannerBox };
