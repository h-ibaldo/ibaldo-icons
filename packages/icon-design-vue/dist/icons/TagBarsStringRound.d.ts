import type { DefineComponent } from 'vue';

export interface TagBarsStringRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagBarsStringRound: DefineComponent<TagBarsStringRoundProps>;

export default TagBarsStringRound;
export { TagBarsStringRound };
