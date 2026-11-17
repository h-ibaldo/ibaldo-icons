import { SvelteComponent } from 'svelte';

export interface BrowserWindowRestrictionsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowRestrictions extends SvelteComponent<BrowserWindowRestrictionsProps> {}
