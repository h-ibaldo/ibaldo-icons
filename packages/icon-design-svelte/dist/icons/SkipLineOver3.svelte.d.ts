import { SvelteComponent } from 'svelte';

export interface SkipLineOver3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipLineOver3 extends SvelteComponent<SkipLineOver3Props> {}
