import { SvelteComponent } from 'svelte';

export interface SkipLineOver2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipLineOver2 extends SvelteComponent<SkipLineOver2Props> {}
