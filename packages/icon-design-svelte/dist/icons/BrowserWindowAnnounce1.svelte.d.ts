import { SvelteComponent } from 'svelte';

export interface BrowserWindowAnnounce1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowAnnounce1 extends SvelteComponent<BrowserWindowAnnounce1Props> {}
