import { SvelteComponent } from 'svelte';

export interface ChartBarCircleDottedThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleDottedThin extends SvelteComponent<ChartBarCircleDottedThinProps> {}
