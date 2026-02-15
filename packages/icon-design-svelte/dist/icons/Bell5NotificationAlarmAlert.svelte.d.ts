import { SvelteComponent } from 'svelte';

export interface Bell5NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5NotificationAlarmAlert extends SvelteComponent<Bell5NotificationAlarmAlertProps> {}
