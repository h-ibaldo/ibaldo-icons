import type { DefineComponent } from 'vue';

export interface HandMoveTwoFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandMoveTwoFingers: DefineComponent<HandMoveTwoFingersProps>;

export default HandMoveTwoFingers;
export { HandMoveTwoFingers };
