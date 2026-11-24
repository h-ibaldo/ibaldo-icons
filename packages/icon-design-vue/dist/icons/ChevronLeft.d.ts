import type { DefineComponent } from 'vue';

export interface ChevronLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronLeft: DefineComponent<ChevronLeftProps>;

export default ChevronLeft;
export { ChevronLeft };
