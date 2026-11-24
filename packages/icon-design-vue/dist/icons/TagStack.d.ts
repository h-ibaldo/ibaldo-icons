import type { DefineComponent } from 'vue';

export interface TagStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagStack: DefineComponent<TagStackProps>;

export default TagStack;
export { TagStack };
