import { SvelteComponent } from 'svelte';

export interface ClockSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSlash extends SvelteComponent<ClockSlashProps> {}
