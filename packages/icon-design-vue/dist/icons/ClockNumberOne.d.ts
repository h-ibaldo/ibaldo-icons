import type { DefineComponent } from 'vue';

export interface ClockNumberOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockNumberOne: DefineComponent<ClockNumberOneProps>;

export default ClockNumberOne;
export { ClockNumberOne };
