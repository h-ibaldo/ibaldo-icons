import { SvelteComponent } from 'svelte';

export interface SirenAlarmAlertNotification2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SirenAlarmAlertNotification2 extends SvelteComponent<SirenAlarmAlertNotification2Props> {}
