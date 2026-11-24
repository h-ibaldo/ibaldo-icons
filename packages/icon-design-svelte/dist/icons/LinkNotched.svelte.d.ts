import { SvelteComponent } from 'svelte';

export interface LinkNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkNotched extends SvelteComponent<LinkNotchedProps> {}
