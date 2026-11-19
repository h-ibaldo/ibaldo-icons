import type { DefineComponent } from 'vue';

export interface TagXCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagXCircleRound: DefineComponent<TagXCircleRoundProps>;

export default TagXCircleRound;
export { TagXCircleRound };
