import type { DefineComponent } from 'vue';

export interface ArrowUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpDown: DefineComponent<ArrowUpDownProps>;

export default ArrowUpDown;
export { ArrowUpDown };
