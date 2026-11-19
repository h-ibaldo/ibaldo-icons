import type { DefineComponent } from 'vue';

export interface TagStringRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagStringRound: DefineComponent<TagStringRoundProps>;

export default TagStringRound;
export { TagStringRound };
