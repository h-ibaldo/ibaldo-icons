import { SvelteComponent } from 'svelte';

export interface ClockSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSync extends SvelteComponent<ClockSyncProps> {}
