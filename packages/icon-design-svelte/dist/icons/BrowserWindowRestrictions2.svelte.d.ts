import { SvelteComponent } from 'svelte';

export interface BrowserWindowRestrictions2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowRestrictions2 extends SvelteComponent<BrowserWindowRestrictions2Props> {}
