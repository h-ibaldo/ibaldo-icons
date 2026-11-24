import { SvelteComponent } from 'svelte';

export interface ListDollarSmallDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListDollarSmallDash extends SvelteComponent<ListDollarSmallDashProps> {}
