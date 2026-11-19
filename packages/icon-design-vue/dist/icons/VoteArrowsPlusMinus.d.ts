import type { DefineComponent } from 'vue';

export interface VoteArrowsPlusMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteArrowsPlusMinus: DefineComponent<VoteArrowsPlusMinusProps>;

export default VoteArrowsPlusMinus;
export { VoteArrowsPlusMinus };
