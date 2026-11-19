import type { DefineComponent } from 'vue';

export interface HandPinchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPinch: DefineComponent<HandPinchProps>;

export default HandPinch;
export { HandPinch };
