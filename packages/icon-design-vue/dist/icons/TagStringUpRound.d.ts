import type { DefineComponent } from 'vue';

export interface TagStringUpRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagStringUpRound: DefineComponent<TagStringUpRoundProps>;

export default TagStringUpRound;
export { TagStringUpRound };
