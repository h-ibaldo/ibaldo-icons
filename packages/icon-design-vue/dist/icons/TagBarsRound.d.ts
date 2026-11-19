import type { DefineComponent } from 'vue';

export interface TagBarsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagBarsRound: DefineComponent<TagBarsRoundProps>;

export default TagBarsRound;
export { TagBarsRound };
