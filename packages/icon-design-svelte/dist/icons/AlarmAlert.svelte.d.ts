import { SvelteComponent } from 'svelte';

export interface AlarmAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmAlert extends SvelteComponent<AlarmAlertProps> {}
