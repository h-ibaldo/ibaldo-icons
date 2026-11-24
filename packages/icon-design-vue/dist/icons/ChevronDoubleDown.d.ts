import type { DefineComponent } from 'vue';

export interface ChevronDoubleDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDoubleDown: DefineComponent<ChevronDoubleDownProps>;

export default ChevronDoubleDown;
export { ChevronDoubleDown };
