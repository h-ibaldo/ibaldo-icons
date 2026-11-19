import type { DefineComponent } from 'vue';

export interface LinkSquareClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSquareClip: DefineComponent<LinkSquareClipProps>;

export default LinkSquareClip;
export { LinkSquareClip };
