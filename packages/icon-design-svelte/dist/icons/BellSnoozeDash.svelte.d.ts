import { SvelteComponent } from 'svelte';

export interface BellSnoozeDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSnoozeDash extends SvelteComponent<BellSnoozeDashProps> {}
