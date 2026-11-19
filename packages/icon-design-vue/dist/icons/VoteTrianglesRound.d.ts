import type { DefineComponent } from 'vue';

export interface VoteTrianglesRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteTrianglesRound: DefineComponent<VoteTrianglesRoundProps>;

export default VoteTrianglesRound;
export { VoteTrianglesRound };
