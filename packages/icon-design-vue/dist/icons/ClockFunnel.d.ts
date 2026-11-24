import type { DefineComponent } from 'vue';

export interface ClockFunnelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockFunnel: DefineComponent<ClockFunnelProps>;

export default ClockFunnel;
export { ClockFunnel };
