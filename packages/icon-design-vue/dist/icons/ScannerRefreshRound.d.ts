import type { DefineComponent } from 'vue';

export interface ScannerRefreshRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRefreshRound: DefineComponent<ScannerRefreshRoundProps>;

export default ScannerRefreshRound;
export { ScannerRefreshRound };
