import type { DefineComponent } from 'vue';

export interface HandPointerFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandPointerFingers: DefineComponent<HandPointerFingersProps>;

export default HandPointerFingers;
export { HandPointerFingers };
