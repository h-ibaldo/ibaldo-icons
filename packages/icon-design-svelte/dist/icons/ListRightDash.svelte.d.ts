import { SvelteComponent } from 'svelte';

export interface ListRightDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListRightDash extends SvelteComponent<ListRightDashProps> {}
