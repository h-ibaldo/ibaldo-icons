import { SvelteComponent } from 'svelte';

export interface ListXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListX extends SvelteComponent<ListXProps> {}
