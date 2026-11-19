import type { DefineComponent } from 'vue';

export interface ScanVideoLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanVideoLarge: DefineComponent<ScanVideoLargeProps>;

export default ScanVideoLarge;
export { ScanVideoLarge };
