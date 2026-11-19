import type { DefineComponent } from 'vue';

export interface ClockNumberThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockNumberThree: DefineComponent<ClockNumberThreeProps>;

export default ClockNumberThree;
export { ClockNumberThree };
