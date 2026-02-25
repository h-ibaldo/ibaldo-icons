import { SvelteComponent } from 'svelte';

export interface SirenAlarmAlertNotification1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SirenAlarmAlertNotification1 extends SvelteComponent<SirenAlarmAlertNotification1Props> {}
