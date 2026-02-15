import { SvelteComponent } from 'svelte';

export interface Bell5NotificationAlarmAlertRedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5NotificationAlarmAlertRedDot extends SvelteComponent<Bell5NotificationAlarmAlertRedDotProps> {}
