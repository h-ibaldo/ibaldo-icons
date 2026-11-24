import type { DefineComponent } from 'vue';

export interface TagOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagOffRound: DefineComponent<TagOffRoundProps>;

export default TagOffRound;
export { TagOffRound };
