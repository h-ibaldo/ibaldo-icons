import type { DefineComponent } from 'vue';

export interface ClockAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockAngled: DefineComponent<ClockAngledProps>;

export default ClockAngled;
export { ClockAngled };
