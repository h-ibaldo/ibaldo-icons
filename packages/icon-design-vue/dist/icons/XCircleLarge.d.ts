import type { DefineComponent } from 'vue';

export interface XCircleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XCircleLarge: DefineComponent<XCircleLargeProps>;

export default XCircleLarge;
export { XCircleLarge };
