import type { DefineComponent } from 'vue';

export interface TagDividerDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TagDividerDashed: DefineComponent<TagDividerDashedProps>;

export default TagDividerDashed;
export { TagDividerDashed };
