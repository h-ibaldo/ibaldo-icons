import { SvelteComponent } from 'svelte';

export interface AlarmAlertBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmAlertBare extends SvelteComponent<AlarmAlertBareProps> {}
