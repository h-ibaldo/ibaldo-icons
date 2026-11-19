import type { DefineComponent } from 'vue';

export interface TagOffTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagOffTilted: DefineComponent<TagOffTiltedProps>;

export default TagOffTilted;
export { TagOffTilted };
