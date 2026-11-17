import { SvelteComponent } from 'svelte';

export interface LinkBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBroken extends SvelteComponent<LinkBrokenProps> {}
