import type { DefineComponent } from 'vue';

export interface ArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDown: DefineComponent<ArrowDownProps>;

export default ArrowDown;
export { ArrowDown };
