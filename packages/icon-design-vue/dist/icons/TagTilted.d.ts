import type { DefineComponent } from 'vue';

export interface TagTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagTilted: DefineComponent<TagTiltedProps>;

export default TagTilted;
export { TagTilted };
