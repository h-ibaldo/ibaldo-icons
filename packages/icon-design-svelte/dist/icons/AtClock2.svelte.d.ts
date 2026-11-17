import { SvelteComponent } from 'svelte';

export interface AtClock2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClock2 extends SvelteComponent<AtClock2Props> {}
