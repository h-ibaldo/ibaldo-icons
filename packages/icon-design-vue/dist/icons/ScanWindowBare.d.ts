import type { DefineComponent } from 'vue';

export interface ScanWindowBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanWindowBare: DefineComponent<ScanWindowBareProps>;

export default ScanWindowBare;
export { ScanWindowBare };
