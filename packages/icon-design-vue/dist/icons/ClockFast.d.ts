import type { DefineComponent } from 'vue';

export interface ClockFastProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockFast: DefineComponent<ClockFastProps>;

export default ClockFast;
export { ClockFast };
