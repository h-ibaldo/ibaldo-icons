import { SvelteComponent } from 'svelte';

export interface Bell3NotificationAlarmAlertRedDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3NotificationAlarmAlertRedDot extends SvelteComponent<Bell3NotificationAlarmAlertRedDotProps> {}
