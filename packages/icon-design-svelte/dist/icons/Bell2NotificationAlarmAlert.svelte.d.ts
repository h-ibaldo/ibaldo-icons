import { SvelteComponent } from 'svelte';

export interface Bell2NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2NotificationAlarmAlert extends SvelteComponent<Bell2NotificationAlarmAlertProps> {}
