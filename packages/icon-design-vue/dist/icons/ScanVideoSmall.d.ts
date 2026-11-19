import type { DefineComponent } from 'vue';

export interface ScanVideoSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanVideoSmall: DefineComponent<ScanVideoSmallProps>;

export default ScanVideoSmall;
export { ScanVideoSmall };
