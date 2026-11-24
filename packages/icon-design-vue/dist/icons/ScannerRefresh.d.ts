import type { DefineComponent } from 'vue';

export interface ScannerRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScannerRefresh: DefineComponent<ScannerRefreshProps>;

export default ScannerRefresh;
export { ScannerRefresh };
