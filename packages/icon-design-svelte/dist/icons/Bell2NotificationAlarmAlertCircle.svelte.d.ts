import { SvelteComponent } from 'svelte';

export interface Bell2NotificationAlarmAlertCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2NotificationAlarmAlertCircle extends SvelteComponent<Bell2NotificationAlarmAlertCircleProps> {}
