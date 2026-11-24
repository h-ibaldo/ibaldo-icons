import type { DefineComponent } from 'vue';

export interface LinkPlusClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusClip: DefineComponent<LinkPlusClipProps>;

export default LinkPlusClip;
export { LinkPlusClip };
