import type { DefineComponent } from 'vue';

export interface ScannerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scanner: DefineComponent<ScannerProps>;

export default Scanner;
export { Scanner };
