import type { DefineComponent } from 'vue';

export interface ScanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scan: DefineComponent<ScanProps>;

export default Scan;
export { Scan };
