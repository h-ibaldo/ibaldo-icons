import type { DefineComponent } from 'vue';

export interface ScannerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRound: DefineComponent<ScannerRoundProps>;

export default ScannerRound;
export { ScannerRound };
