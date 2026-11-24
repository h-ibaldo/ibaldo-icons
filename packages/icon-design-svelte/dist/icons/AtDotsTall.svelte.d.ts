import { SvelteComponent } from 'svelte';

export interface AtDotsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtDotsTall extends SvelteComponent<AtDotsTallProps> {}
