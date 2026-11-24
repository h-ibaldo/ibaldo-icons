import type { DefineComponent } from 'vue';

export interface SplitUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SplitUpDown: DefineComponent<SplitUpDownProps>;

export default SplitUpDown;
export { SplitUpDown };
