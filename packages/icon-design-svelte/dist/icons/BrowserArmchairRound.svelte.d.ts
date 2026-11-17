import { SvelteComponent } from 'svelte';

export interface BrowserArmchairRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserArmchairRound extends SvelteComponent<BrowserArmchairRoundProps> {}
