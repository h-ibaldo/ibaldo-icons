import { SvelteComponent } from 'svelte';

export interface ListXDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXDash extends SvelteComponent<ListXDashProps> {}
