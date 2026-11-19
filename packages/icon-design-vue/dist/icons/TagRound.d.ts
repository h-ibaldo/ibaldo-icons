import type { DefineComponent } from 'vue';

export interface TagRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagRound: DefineComponent<TagRoundProps>;

export default TagRound;
export { TagRound };
