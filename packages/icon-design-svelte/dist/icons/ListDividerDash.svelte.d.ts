import { SvelteComponent } from 'svelte';

export interface ListDividerDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListDividerDash extends SvelteComponent<ListDividerDashProps> {}
