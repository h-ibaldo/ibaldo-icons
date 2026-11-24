import { SvelteComponent } from 'svelte';

export interface CookieCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieCheck extends SvelteComponent<CookieCheckProps> {}
