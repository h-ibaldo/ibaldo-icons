import type { DefineComponent } from 'vue';

export interface ChevronDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDown: DefineComponent<ChevronDownProps>;

export default ChevronDown;
export { ChevronDown };
