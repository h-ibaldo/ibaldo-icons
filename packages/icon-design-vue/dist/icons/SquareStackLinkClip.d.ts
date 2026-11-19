import type { DefineComponent } from 'vue';

export interface SquareStackLinkClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLinkClip: DefineComponent<SquareStackLinkClipProps>;

export default SquareStackLinkClip;
export { SquareStackLinkClip };
