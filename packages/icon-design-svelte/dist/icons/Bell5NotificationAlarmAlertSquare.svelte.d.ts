import { SvelteComponent } from 'svelte';

export interface Bell5NotificationAlarmAlertSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5NotificationAlarmAlertSquare extends SvelteComponent<Bell5NotificationAlarmAlertSquareProps> {}
