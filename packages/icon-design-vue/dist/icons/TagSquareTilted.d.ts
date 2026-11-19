import type { DefineComponent } from 'vue';

export interface TagSquareTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagSquareTilted: DefineComponent<TagSquareTiltedProps>;

export default TagSquareTilted;
export { TagSquareTilted };
