import type { DefineComponent } from 'vue';

export interface XOctagonLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XOctagonLarge: DefineComponent<XOctagonLargeProps>;

export default XOctagonLarge;
export { XOctagonLarge };
