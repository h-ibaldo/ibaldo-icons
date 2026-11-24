import type { DefineComponent } from 'vue';

export interface LinkMinusClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusClip: DefineComponent<LinkMinusClipProps>;

export default LinkMinusClip;
export { LinkMinusClip };
