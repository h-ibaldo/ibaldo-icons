import type { DefineComponent } from 'vue';

export interface PollHorizontalPlusMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollHorizontalPlusMinus: DefineComponent<PollHorizontalPlusMinusProps>;

export default PollHorizontalPlusMinus;
export { PollHorizontalPlusMinus };
