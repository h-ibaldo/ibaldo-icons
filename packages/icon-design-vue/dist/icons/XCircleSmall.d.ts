import type { DefineComponent } from 'vue';

export interface XCircleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XCircleSmall: DefineComponent<XCircleSmallProps>;

export default XCircleSmall;
export { XCircleSmall };
