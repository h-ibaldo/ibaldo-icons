import { SvelteComponent } from 'svelte';

export interface Bell6NotificationAlarmAlertClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6NotificationAlarmAlertClock extends SvelteComponent<Bell6NotificationAlarmAlertClockProps> {}
