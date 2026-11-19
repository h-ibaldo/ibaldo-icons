import type { DefineComponent } from 'vue';

export interface ScanFileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFile: DefineComponent<ScanFileProps>;

export default ScanFile;
export { ScanFile };
