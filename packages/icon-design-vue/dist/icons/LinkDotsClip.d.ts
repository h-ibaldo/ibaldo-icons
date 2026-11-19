import type { DefineComponent } from 'vue';

export interface LinkDotsClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsClip: DefineComponent<LinkDotsClipProps>;

export default LinkDotsClip;
export { LinkDotsClip };
