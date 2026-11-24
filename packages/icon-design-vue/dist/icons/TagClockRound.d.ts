import type { DefineComponent } from 'vue';

export interface TagClockRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagClockRound: DefineComponent<TagClockRoundProps>;

export default TagClockRound;
export { TagClockRound };
