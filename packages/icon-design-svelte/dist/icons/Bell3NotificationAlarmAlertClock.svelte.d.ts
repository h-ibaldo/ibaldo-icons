import { SvelteComponent } from 'svelte';

export interface Bell3NotificationAlarmAlertClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3NotificationAlarmAlertClock extends SvelteComponent<Bell3NotificationAlarmAlertClockProps> {}
