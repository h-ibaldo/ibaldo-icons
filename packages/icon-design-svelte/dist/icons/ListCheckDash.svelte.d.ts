import { SvelteComponent } from 'svelte';

export interface ListCheckDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCheckDash extends SvelteComponent<ListCheckDashProps> {}
