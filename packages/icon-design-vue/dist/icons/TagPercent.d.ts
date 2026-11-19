import type { DefineComponent } from 'vue';

export interface TagPercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagPercent: DefineComponent<TagPercentProps>;

export default TagPercent;
export { TagPercent };
