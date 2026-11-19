import type { DefineComponent } from 'vue';

export interface TagPlusCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagPlusCircleRound: DefineComponent<TagPlusCircleRoundProps>;

export default TagPlusCircleRound;
export { TagPlusCircleRound };
