import { SvelteComponent } from 'svelte';

export interface EnvelopeLupeGroup1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeLupeGroup1 extends SvelteComponent<EnvelopeLupeGroup1Props> {}
