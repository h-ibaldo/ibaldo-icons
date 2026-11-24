import type { DefineComponent } from 'vue';

export interface DollarShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DollarShort: DefineComponent<DollarShortProps>;

export default DollarShort;
export { DollarShort };
