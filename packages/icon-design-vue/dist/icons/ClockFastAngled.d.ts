import type { DefineComponent } from 'vue';

export interface ClockFastAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockFastAngled: DefineComponent<ClockFastAngledProps>;

export default ClockFastAngled;
export { ClockFastAngled };
