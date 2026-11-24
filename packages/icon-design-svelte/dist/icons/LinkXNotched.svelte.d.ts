import { SvelteComponent } from 'svelte';

export interface LinkXNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXNotched extends SvelteComponent<LinkXNotchedProps> {}
