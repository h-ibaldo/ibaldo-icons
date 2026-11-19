import type { DefineComponent } from 'vue';

export interface ClockEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockEye: DefineComponent<ClockEyeProps>;

export default ClockEye;
export { ClockEye };
