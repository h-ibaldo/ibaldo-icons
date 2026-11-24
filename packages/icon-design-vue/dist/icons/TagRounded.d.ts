import type { DefineComponent } from 'vue';

export interface TagRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagRounded: DefineComponent<TagRoundedProps>;

export default TagRounded;
export { TagRounded };
