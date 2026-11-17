import { SvelteComponent } from 'svelte';

export interface BrowserWindowLaunch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowLaunch2 extends SvelteComponent<BrowserWindowLaunch2Props> {}
