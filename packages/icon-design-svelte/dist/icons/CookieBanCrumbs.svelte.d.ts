import { SvelteComponent } from 'svelte';

export interface CookieBanCrumbsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieBanCrumbs extends SvelteComponent<CookieBanCrumbsProps> {}
