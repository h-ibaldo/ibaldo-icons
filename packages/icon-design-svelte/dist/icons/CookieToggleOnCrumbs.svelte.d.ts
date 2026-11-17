import { SvelteComponent } from 'svelte';

export interface CookieToggleOnCrumbsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieToggleOnCrumbs extends SvelteComponent<CookieToggleOnCrumbsProps> {}
