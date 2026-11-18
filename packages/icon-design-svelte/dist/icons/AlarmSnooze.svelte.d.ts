import { SvelteComponent } from 'svelte';

export interface AlarmSnoozeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmSnooze extends SvelteComponent<AlarmSnoozeProps> {}
