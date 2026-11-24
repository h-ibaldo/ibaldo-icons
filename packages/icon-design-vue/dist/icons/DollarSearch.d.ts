import type { DefineComponent } from 'vue';

export interface DollarSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DollarSearch: DefineComponent<DollarSearchProps>;

export default DollarSearch;
export { DollarSearch };
