import type { DefineComponent } from 'vue';

export interface TagPercentRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagPercentRound: DefineComponent<TagPercentRoundProps>;

export default TagPercentRound;
export { TagPercentRound };
