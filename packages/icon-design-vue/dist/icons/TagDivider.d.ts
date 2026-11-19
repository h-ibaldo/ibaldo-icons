import type { DefineComponent } from 'vue';

export interface TagDividerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagDivider: DefineComponent<TagDividerProps>;

export default TagDivider;
export { TagDivider };
