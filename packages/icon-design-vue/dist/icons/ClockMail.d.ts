import type { DefineComponent } from 'vue';

export interface ClockMailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockMail: DefineComponent<ClockMailProps>;

export default ClockMail;
export { ClockMail };
