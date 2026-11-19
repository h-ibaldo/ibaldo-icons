import type { DefineComponent } from 'vue';

export interface ClockSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSync: DefineComponent<ClockSyncProps>;

export default ClockSync;
export { ClockSync };
