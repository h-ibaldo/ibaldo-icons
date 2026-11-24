import type { DefineComponent } from 'vue';

export interface TagCheckCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagCheckCircleRound: DefineComponent<TagCheckCircleRoundProps>;

export default TagCheckCircleRound;
export { TagCheckCircleRound };
