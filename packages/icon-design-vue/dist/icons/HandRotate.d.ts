import type { DefineComponent } from 'vue';

export interface HandRotateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandRotate: DefineComponent<HandRotateProps>;

export default HandRotate;
export { HandRotate };
