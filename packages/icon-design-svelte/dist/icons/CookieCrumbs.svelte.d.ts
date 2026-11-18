import { SvelteComponent } from 'svelte';

export interface CookieCrumbsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieCrumbs extends SvelteComponent<CookieCrumbsProps> {}
