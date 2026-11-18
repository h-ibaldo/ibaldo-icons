import { SvelteComponent } from 'svelte';

export interface AlarmCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmCheck extends SvelteComponent<AlarmCheckProps> {}
