import { SvelteComponent } from 'svelte';

export interface ListUserSmallDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListUserSmallDash extends SvelteComponent<ListUserSmallDashProps> {}
