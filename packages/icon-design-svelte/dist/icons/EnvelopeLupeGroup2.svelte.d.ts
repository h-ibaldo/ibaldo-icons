import { SvelteComponent } from 'svelte';

export interface EnvelopeLupeGroup2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeLupeGroup2 extends SvelteComponent<EnvelopeLupeGroup2Props> {}
