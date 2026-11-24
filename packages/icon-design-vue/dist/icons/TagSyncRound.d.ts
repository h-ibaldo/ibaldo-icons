import type { DefineComponent } from 'vue';

export interface TagSyncRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagSyncRound: DefineComponent<TagSyncRoundProps>;

export default TagSyncRound;
export { TagSyncRound };
