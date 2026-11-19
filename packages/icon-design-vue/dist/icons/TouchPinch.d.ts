import type { DefineComponent } from 'vue';

export interface TouchPinchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchPinch: DefineComponent<TouchPinchProps>;

export default TouchPinch;
export { TouchPinch };
