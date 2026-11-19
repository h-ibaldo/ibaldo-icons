import type { DefineComponent } from 'vue';

export interface VoteArrowsHollowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteArrowsHollow: DefineComponent<VoteArrowsHollowProps>;

export default VoteArrowsHollow;
export { VoteArrowsHollow };
