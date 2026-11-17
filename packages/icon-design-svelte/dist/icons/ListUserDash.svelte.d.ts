import { SvelteComponent } from 'svelte';

export interface ListUserDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListUserDash extends SvelteComponent<ListUserDashProps> {}
