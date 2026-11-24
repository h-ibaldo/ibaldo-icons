import type { DefineComponent } from 'vue';

export interface TouchTapTwoFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchTapTwoFingers: DefineComponent<TouchTapTwoFingersProps>;

export default TouchTapTwoFingers;
export { TouchTapTwoFingers };
