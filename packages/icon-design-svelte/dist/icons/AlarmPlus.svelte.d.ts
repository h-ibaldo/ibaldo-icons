import { SvelteComponent } from 'svelte';

export interface AlarmPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPlus extends SvelteComponent<AlarmPlusProps> {}
