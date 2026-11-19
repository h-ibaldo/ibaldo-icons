import type { DefineComponent } from 'vue';

export interface HandTapTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapTwo: DefineComponent<HandTapTwoProps>;

export default HandTapTwo;
export { HandTapTwo };
