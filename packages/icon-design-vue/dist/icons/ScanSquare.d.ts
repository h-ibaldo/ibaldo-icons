import type { DefineComponent } from 'vue';

export interface ScanSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanSquare: DefineComponent<ScanSquareProps>;

export default ScanSquare;
export { ScanSquare };
