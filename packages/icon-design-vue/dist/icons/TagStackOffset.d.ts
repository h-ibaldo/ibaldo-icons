import type { DefineComponent } from 'vue';

export interface TagStackOffsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagStackOffset: DefineComponent<TagStackOffsetProps>;

export default TagStackOffset;
export { TagStackOffset };
