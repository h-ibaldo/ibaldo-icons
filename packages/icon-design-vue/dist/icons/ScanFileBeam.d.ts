import type { DefineComponent } from 'vue';

export interface ScanFileBeamProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFileBeam: DefineComponent<ScanFileBeamProps>;

export default ScanFileBeam;
export { ScanFileBeam };
