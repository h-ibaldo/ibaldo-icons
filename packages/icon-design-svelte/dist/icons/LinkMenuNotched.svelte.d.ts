import { SvelteComponent } from 'svelte';

export interface LinkMenuNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuNotched extends SvelteComponent<LinkMenuNotchedProps> {}
