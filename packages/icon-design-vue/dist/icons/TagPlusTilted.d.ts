import type { DefineComponent } from 'vue';

export interface TagPlusTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagPlusTilted: DefineComponent<TagPlusTiltedProps>;

export default TagPlusTilted;
export { TagPlusTilted };
