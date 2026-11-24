import type { DefineComponent } from 'vue';

export interface XSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XSmall: DefineComponent<XSmallProps>;

export default XSmall;
export { XSmall };
