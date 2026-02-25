import { SvelteComponent } from 'svelte';

export interface BrowserWindowRocketLaunch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowRocketLaunch2 extends SvelteComponent<BrowserWindowRocketLaunch2Props> {}
