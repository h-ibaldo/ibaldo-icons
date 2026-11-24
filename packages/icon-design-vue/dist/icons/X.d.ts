import type { DefineComponent } from 'vue';

export interface XProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const X: DefineComponent<XProps>;

export default X;
export { X };
