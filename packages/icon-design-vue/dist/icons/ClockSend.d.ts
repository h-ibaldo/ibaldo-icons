import type { DefineComponent } from 'vue';

export interface ClockSendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSend: DefineComponent<ClockSendProps>;

export default ClockSend;
export { ClockSend };
