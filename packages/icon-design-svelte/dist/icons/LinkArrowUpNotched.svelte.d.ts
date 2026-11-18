import { SvelteComponent } from 'svelte';

export interface LinkArrowUpNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpNotched extends SvelteComponent<LinkArrowUpNotchedProps> {}
