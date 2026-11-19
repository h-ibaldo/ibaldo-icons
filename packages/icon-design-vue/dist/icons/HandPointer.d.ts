import type { DefineComponent } from 'vue';

export interface HandPointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPointer: DefineComponent<HandPointerProps>;

export default HandPointer;
export { HandPointer };
