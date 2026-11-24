import type { DefineComponent } from 'vue';

export interface LinkClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkClip: DefineComponent<LinkClipProps>;

export default LinkClip;
export { LinkClip };
