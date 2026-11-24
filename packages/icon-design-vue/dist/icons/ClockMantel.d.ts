import type { DefineComponent } from 'vue';

export interface ClockMantelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockMantel: DefineComponent<ClockMantelProps>;

export default ClockMantel;
export { ClockMantel };
