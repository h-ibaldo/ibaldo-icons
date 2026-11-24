import { SvelteComponent } from 'svelte';

export interface LinkDotsNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsNotched extends SvelteComponent<LinkDotsNotchedProps> {}
