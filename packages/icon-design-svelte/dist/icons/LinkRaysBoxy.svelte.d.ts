import { SvelteComponent } from 'svelte';

export interface LinkRaysBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRaysBoxy extends SvelteComponent<LinkRaysBoxyProps> {}
