import type { DefineComponent } from 'vue';

export interface XUnderlineSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XUnderlineSquare: DefineComponent<XUnderlineSquareProps>;

export default XUnderlineSquare;
export { XUnderlineSquare };
