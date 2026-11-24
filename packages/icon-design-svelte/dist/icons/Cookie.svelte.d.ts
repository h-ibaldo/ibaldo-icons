import { SvelteComponent } from 'svelte';

export interface CookieProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cookie extends SvelteComponent<CookieProps> {}
