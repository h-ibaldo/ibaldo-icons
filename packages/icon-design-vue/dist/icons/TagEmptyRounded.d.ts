import type { DefineComponent } from 'vue';

export interface TagEmptyRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagEmptyRounded: DefineComponent<TagEmptyRoundedProps>;

export default TagEmptyRounded;
export { TagEmptyRounded };
