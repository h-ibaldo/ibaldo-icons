import type { DefineComponent } from 'vue';

export interface VoteArrowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteArrows: DefineComponent<VoteArrowsProps>;

export default VoteArrows;
export { VoteArrows };
