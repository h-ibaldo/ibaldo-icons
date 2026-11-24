import type { DefineComponent } from 'vue';

export interface SquarePlusLinkClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePlusLinkClip: DefineComponent<SquarePlusLinkClipProps>;

export default SquarePlusLinkClip;
export { SquarePlusLinkClip };
