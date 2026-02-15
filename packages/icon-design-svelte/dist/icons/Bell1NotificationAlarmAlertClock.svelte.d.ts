import { SvelteComponent } from 'svelte';

export interface Bell1NotificationAlarmAlertClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1NotificationAlarmAlertClock extends SvelteComponent<Bell1NotificationAlarmAlertClockProps> {}
