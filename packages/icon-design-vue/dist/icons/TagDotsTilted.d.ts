import type { DefineComponent } from 'vue';

export interface TagDotsTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagDotsTilted: DefineComponent<TagDotsTiltedProps>;

export default TagDotsTilted;
export { TagDotsTilted };
