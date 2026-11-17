import { SvelteComponent } from 'svelte';

export interface SunShortLarge2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortLarge2 extends SvelteComponent<SunShortLarge2Props> {}
