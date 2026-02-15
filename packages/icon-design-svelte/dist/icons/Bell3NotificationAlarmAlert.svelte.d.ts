import { SvelteComponent } from 'svelte';

export interface Bell3NotificationAlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3NotificationAlarmAlert extends SvelteComponent<Bell3NotificationAlarmAlertProps> {}
