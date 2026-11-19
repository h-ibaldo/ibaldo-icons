import type { DefineComponent } from 'vue';

export interface XSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XSquareSmall: DefineComponent<XSquareSmallProps>;

export default XSquareSmall;
export { XSquareSmall };
