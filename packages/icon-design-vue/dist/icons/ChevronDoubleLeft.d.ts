import type { DefineComponent } from 'vue';

export interface ChevronDoubleLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleLeft: DefineComponent<ChevronDoubleLeftProps>;

export default ChevronDoubleLeft;
export { ChevronDoubleLeft };
