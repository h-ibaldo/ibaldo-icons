import type { DefineComponent } from 'vue';

export interface TagBarsTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagBarsTilted: DefineComponent<TagBarsTiltedProps>;

export default TagBarsTilted;
export { TagBarsTilted };
