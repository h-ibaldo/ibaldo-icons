import { SvelteComponent } from 'svelte';

export interface Bell1NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1NotificationAlarmAlert extends SvelteComponent<Bell1NotificationAlarmAlertProps> {}
