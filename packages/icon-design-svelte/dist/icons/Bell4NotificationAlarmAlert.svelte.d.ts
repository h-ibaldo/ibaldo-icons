import { SvelteComponent } from 'svelte';

export interface Bell4NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4NotificationAlarmAlert extends SvelteComponent<Bell4NotificationAlarmAlertProps> {}
