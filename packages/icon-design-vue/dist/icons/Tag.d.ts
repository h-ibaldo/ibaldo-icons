import type { DefineComponent } from 'vue';

export interface TagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Tag: DefineComponent<TagProps>;

export default Tag;
export { Tag };
