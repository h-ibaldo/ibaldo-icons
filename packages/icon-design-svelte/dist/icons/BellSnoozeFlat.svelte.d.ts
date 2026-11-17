import { SvelteComponent } from 'svelte';

export interface BellSnoozeFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSnoozeFlat extends SvelteComponent<BellSnoozeFlatProps> {}
