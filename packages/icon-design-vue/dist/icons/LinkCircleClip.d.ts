import type { DefineComponent } from 'vue';

export interface LinkCircleClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleClip: DefineComponent<LinkCircleClipProps>;

export default LinkCircleClip;
export { LinkCircleClip };
