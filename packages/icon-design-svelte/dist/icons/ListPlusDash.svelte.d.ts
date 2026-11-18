import { SvelteComponent } from 'svelte';

export interface ListPlusDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListPlusDash extends SvelteComponent<ListPlusDashProps> {}
