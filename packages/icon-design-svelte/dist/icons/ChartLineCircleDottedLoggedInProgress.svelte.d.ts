import { SvelteComponent } from 'svelte';

export interface ChartLineCircleDottedLoggedInProgressProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircleDottedLoggedInProgress extends SvelteComponent<ChartLineCircleDottedLoggedInProgressProps> {}
