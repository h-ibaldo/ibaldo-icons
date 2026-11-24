import type { DefineComponent } from 'vue';

export interface ScanBeamProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanBeam: DefineComponent<ScanBeamProps>;

export default ScanBeam;
export { ScanBeam };
