import { SvelteComponent } from 'svelte';

export interface LinkEditNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditNotched extends SvelteComponent<LinkEditNotchedProps> {}
