import type { DefineComponent } from 'vue';

export interface XOctagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XOctagon: DefineComponent<XOctagonProps>;

export default XOctagon;
export { XOctagon };
