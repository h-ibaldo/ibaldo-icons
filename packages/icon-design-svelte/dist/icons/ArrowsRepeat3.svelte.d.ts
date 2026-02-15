import { SvelteComponent } from 'svelte';

export interface ArrowsRepeat3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsRepeat3 extends SvelteComponent<ArrowsRepeat3Props> {}
