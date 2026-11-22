import type { DefineComponent } from 'vue';

export interface ScanSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanSquareStack: DefineComponent<ScanSquareStackProps>;

export default ScanSquareStack;
export { ScanSquareStack };
