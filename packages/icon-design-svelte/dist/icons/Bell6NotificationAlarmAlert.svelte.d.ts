import { SvelteComponent } from 'svelte';

export interface Bell6NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6NotificationAlarmAlert extends SvelteComponent<Bell6NotificationAlarmAlertProps> {}
