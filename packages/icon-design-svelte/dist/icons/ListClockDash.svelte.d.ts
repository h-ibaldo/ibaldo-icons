import { SvelteComponent } from 'svelte';

export interface ListClockDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListClockDash extends SvelteComponent<ListClockDashProps> {}
