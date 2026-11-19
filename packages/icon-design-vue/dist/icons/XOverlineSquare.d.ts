import type { DefineComponent } from 'vue';

export interface XOverlineSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XOverlineSquare: DefineComponent<XOverlineSquareProps>;

export default XOverlineSquare;
export { XOverlineSquare };
