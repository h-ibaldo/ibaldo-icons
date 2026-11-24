import type { DefineComponent } from 'vue';

export interface ChevronDoubleUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleUp: DefineComponent<ChevronDoubleUpProps>;

export default ChevronDoubleUp;
export { ChevronDoubleUp };
