import type { DefineComponent } from 'vue';

export interface OptionsPlusMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsPlusMinus: DefineComponent<OptionsPlusMinusProps>;

export default OptionsPlusMinus;
export { OptionsPlusMinus };
