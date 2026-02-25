import { SvelteComponent } from 'svelte';

export interface BrowserWindowLevelsSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowLevelsSettings2 extends SvelteComponent<BrowserWindowLevelsSettings2Props> {}
