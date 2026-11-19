import type { DefineComponent } from 'vue';

export interface ScanFileLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFileLarge: DefineComponent<ScanFileLargeProps>;

export default ScanFileLarge;
export { ScanFileLarge };
