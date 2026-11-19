import type { DefineComponent } from 'vue';

export interface HandTapOneTwoFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapOneTwoFingers: DefineComponent<HandTapOneTwoFingersProps>;

export default HandTapOneTwoFingers;
export { HandTapOneTwoFingers };
