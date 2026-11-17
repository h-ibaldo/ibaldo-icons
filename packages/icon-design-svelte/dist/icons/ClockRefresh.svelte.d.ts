import { SvelteComponent } from 'svelte';

export interface ClockRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockRefresh extends SvelteComponent<ClockRefreshProps> {}
