import { SvelteComponent } from 'svelte';

export interface Bell4NotificationAlarmAlertClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4NotificationAlarmAlertClock extends SvelteComponent<Bell4NotificationAlarmAlertClockProps> {}
