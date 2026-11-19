import type { DefineComponent } from 'vue';

export interface ScanFaceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFace: DefineComponent<ScanFaceProps>;

export default ScanFace;
export { ScanFace };
