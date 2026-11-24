import type { DefineComponent } from 'vue';

export interface ScanFaceRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanFaceRound: DefineComponent<ScanFaceRoundProps>;

export default ScanFaceRound;
export { ScanFaceRound };
