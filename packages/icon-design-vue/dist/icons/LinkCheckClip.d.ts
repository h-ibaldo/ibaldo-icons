import type { DefineComponent } from 'vue';

export interface LinkCheckClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckClip: DefineComponent<LinkCheckClipProps>;

export default LinkCheckClip;
export { LinkCheckClip };
