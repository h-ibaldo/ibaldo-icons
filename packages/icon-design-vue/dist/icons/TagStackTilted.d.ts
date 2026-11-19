import type { DefineComponent } from 'vue';

export interface TagStackTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagStackTilted: DefineComponent<TagStackTiltedProps>;

export default TagStackTilted;
export { TagStackTilted };
