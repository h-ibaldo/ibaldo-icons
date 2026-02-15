import { SvelteComponent } from 'svelte';

export interface Bell6NotificationAlarmAlertRedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6NotificationAlarmAlertRedDot extends SvelteComponent<Bell6NotificationAlarmAlertRedDotProps> {}
