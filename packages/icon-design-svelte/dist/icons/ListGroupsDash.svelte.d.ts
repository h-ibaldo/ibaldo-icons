import { SvelteComponent } from 'svelte';

export interface ListGroupsDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListGroupsDash extends SvelteComponent<ListGroupsDashProps> {}
