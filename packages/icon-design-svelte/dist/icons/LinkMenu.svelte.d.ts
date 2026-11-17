import { SvelteComponent } from 'svelte';

export interface LinkMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenu extends SvelteComponent<LinkMenuProps> {}
