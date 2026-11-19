import type { DefineComponent } from 'vue';

export interface HandTapTwoFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapTwoFingers: DefineComponent<HandTapTwoFingersProps>;

export default HandTapTwoFingers;
export { HandTapTwoFingers };
