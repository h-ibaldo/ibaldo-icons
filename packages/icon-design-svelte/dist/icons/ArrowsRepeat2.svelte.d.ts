import { SvelteComponent } from 'svelte';

export interface ArrowsRepeat2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsRepeat2 extends SvelteComponent<ArrowsRepeat2Props> {}
