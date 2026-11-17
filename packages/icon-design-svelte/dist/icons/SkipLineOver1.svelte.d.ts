import { SvelteComponent } from 'svelte';

export interface SkipLineOver1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipLineOver1 extends SvelteComponent<SkipLineOver1Props> {}
