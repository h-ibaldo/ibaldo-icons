import { SvelteComponent } from 'svelte';

export interface BellRingLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingLines extends SvelteComponent<BellRingLinesProps> {}
