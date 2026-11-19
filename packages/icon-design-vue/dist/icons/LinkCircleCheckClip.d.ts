import type { DefineComponent } from 'vue';

export interface LinkCircleCheckClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleCheckClip: DefineComponent<LinkCircleCheckClipProps>;

export default LinkCircleCheckClip;
export { LinkCircleCheckClip };
