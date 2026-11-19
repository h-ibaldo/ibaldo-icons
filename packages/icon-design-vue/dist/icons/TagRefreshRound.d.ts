import type { DefineComponent } from 'vue';

export interface TagRefreshRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagRefreshRound: DefineComponent<TagRefreshRoundProps>;

export default TagRefreshRound;
export { TagRefreshRound };
