import type { DefineComponent } from 'vue';

export interface LinkEditBandClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBandClip: DefineComponent<LinkEditBandClipProps>;

export default LinkEditBandClip;
export { LinkEditBandClip };
