import type { DefineComponent } from 'vue';

export interface LinkOffClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkOffClip: DefineComponent<LinkOffClipProps>;

export default LinkOffClip;
export { LinkOffClip };
