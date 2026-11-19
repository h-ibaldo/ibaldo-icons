import type { DefineComponent } from 'vue';

export interface TagPercentStringProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagPercentString: DefineComponent<TagPercentStringProps>;

export default TagPercentString;
export { TagPercentString };
