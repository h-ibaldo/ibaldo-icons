import type { DefineComponent } from 'vue';

export interface LinkEditClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditClip: DefineComponent<LinkEditClipProps>;

export default LinkEditClip;
export { LinkEditClip };
