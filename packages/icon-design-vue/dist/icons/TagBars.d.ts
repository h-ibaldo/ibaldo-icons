import type { DefineComponent } from 'vue';

export interface TagBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagBars: DefineComponent<TagBarsProps>;

export default TagBars;
export { TagBars };
