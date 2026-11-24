import type { DefineComponent } from 'vue';

export interface ScanEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanEye: DefineComponent<ScanEyeProps>;

export default ScanEye;
export { ScanEye };
