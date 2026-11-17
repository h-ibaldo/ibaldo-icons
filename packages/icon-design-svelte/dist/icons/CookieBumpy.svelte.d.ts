import { SvelteComponent } from 'svelte';

export interface CookieBumpyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieBumpy extends SvelteComponent<CookieBumpyProps> {}
