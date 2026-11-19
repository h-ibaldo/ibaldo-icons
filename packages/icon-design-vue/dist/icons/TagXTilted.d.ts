import type { DefineComponent } from 'vue';

export interface TagXTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagXTilted: DefineComponent<TagXTiltedProps>;

export default TagXTilted;
export { TagXTilted };
