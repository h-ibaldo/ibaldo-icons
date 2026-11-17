import { SvelteComponent } from 'svelte';

export interface ListSearchSmallDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSearchSmallDash extends SvelteComponent<ListSearchSmallDashProps> {}
