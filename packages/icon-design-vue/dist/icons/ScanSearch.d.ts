import type { DefineComponent } from 'vue';

export interface ScanSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanSearch: DefineComponent<ScanSearchProps>;

export default ScanSearch;
export { ScanSearch };
