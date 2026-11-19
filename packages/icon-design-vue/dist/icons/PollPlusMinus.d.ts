import type { DefineComponent } from 'vue';

export interface PollPlusMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollPlusMinus: DefineComponent<PollPlusMinusProps>;

export default PollPlusMinus;
export { PollPlusMinus };
