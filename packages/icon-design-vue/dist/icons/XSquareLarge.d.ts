import type { DefineComponent } from 'vue';

export interface XSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XSquareLarge: DefineComponent<XSquareLargeProps>;

export default XSquareLarge;
export { XSquareLarge };
