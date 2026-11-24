import type { DefineComponent } from 'vue';

export interface VoteThumbsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteThumbs: DefineComponent<VoteThumbsProps>;

export default VoteThumbs;
export { VoteThumbs };
