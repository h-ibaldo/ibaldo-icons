import type { DefineComponent } from 'vue';

export interface ClockUnlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockUnlock: DefineComponent<ClockUnlockProps>;

export default ClockUnlock;
export { ClockUnlock };
