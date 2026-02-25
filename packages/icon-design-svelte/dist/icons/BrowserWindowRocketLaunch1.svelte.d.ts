import { SvelteComponent } from 'svelte';

export interface BrowserWindowRocketLaunch1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowRocketLaunch1 extends SvelteComponent<BrowserWindowRocketLaunch1Props> {}
