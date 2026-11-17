import { SvelteComponent } from 'svelte';

export interface Sun79Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun79 extends SvelteComponent<Sun79Props> {}
