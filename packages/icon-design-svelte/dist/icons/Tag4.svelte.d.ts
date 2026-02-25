import { SvelteComponent } from 'svelte';

export interface Tag4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tag4 extends SvelteComponent<Tag4Props> {}
