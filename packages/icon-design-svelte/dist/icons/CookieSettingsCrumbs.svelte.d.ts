import { SvelteComponent } from 'svelte';

export interface CookieSettingsCrumbsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CookieSettingsCrumbs extends SvelteComponent<CookieSettingsCrumbsProps> {}
