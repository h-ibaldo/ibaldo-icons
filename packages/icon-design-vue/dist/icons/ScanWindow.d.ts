import type { DefineComponent } from 'vue';

export interface ScanWindowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanWindow: DefineComponent<ScanWindowProps>;

export default ScanWindow;
export { ScanWindow };
