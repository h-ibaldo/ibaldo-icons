import type { DefineComponent } from 'vue';

export interface XSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XSquare: DefineComponent<XSquareProps>;

export default XSquare;
export { XSquare };
