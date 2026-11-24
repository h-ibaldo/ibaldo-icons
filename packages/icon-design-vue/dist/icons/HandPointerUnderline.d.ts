import type { DefineComponent } from 'vue';

export interface HandPointerUnderlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPointerUnderline: DefineComponent<HandPointerUnderlineProps>;

export default HandPointerUnderline;
export { HandPointerUnderline };
