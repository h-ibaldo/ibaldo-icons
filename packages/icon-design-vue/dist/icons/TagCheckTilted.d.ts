import type { DefineComponent } from 'vue';

export interface TagCheckTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagCheckTilted: DefineComponent<TagCheckTiltedProps>;

export default TagCheckTilted;
export { TagCheckTilted };
