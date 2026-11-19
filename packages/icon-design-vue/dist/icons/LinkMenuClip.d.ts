import type { DefineComponent } from 'vue';

export interface LinkMenuClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuClip: DefineComponent<LinkMenuClipProps>;

export default LinkMenuClip;
export { LinkMenuClip };
