import { SvelteComponent } from 'svelte';

export interface ListEditDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListEditDash extends SvelteComponent<ListEditDashProps> {}
