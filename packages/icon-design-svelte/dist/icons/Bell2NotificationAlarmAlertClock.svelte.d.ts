import { SvelteComponent } from 'svelte';

export interface Bell2NotificationAlarmAlertClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2NotificationAlarmAlertClock extends SvelteComponent<Bell2NotificationAlarmAlertClockProps> {}
