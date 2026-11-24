import type { DefineComponent } from 'vue';

export interface ClockPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockPlus: DefineComponent<ClockPlusProps>;

export default ClockPlus;
export { ClockPlus };
