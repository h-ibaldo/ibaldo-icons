import { SvelteComponent } from 'svelte';

export interface ListSearchDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSearchDash extends SvelteComponent<ListSearchDashProps> {}
