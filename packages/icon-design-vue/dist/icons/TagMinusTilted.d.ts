import type { DefineComponent } from 'vue';

export interface TagMinusTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagMinusTilted: DefineComponent<TagMinusTiltedProps>;

export default TagMinusTilted;
export { TagMinusTilted };
