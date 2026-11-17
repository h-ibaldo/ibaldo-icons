import { SvelteComponent } from 'svelte';

export interface LinkXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkX extends SvelteComponent<LinkXProps> {}
