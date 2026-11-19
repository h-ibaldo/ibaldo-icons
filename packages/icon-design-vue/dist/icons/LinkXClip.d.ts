import type { DefineComponent } from 'vue';

export interface LinkXClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXClip: DefineComponent<LinkXClipProps>;

export default LinkXClip;
export { LinkXClip };
