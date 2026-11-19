import type { DefineComponent } from 'vue';

export interface ClockTicksAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockTicksAngled: DefineComponent<ClockTicksAngledProps>;

export default ClockTicksAngled;
export { ClockTicksAngled };
