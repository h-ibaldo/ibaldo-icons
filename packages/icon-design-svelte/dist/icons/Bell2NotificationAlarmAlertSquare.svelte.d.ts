import { SvelteComponent } from 'svelte';

export interface Bell2NotificationAlarmAlertSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2NotificationAlarmAlertSquare extends SvelteComponent<Bell2NotificationAlarmAlertSquareProps> {}
