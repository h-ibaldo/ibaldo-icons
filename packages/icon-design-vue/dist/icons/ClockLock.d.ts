import type { DefineComponent } from 'vue';

export interface ClockLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockLock: DefineComponent<ClockLockProps>;

export default ClockLock;
export { ClockLock };
