import type { DefineComponent } from 'vue';

export interface XLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XLarge: DefineComponent<XLargeProps>;

export default XLarge;
export { XLarge };
