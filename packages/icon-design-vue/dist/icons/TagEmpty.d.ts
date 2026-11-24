import type { DefineComponent } from 'vue';

export interface TagEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagEmpty: DefineComponent<TagEmptyProps>;

export default TagEmpty;
export { TagEmpty };
