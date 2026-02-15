import { SvelteComponent } from 'svelte';

export interface Tag1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tag1 extends SvelteComponent<Tag1Props> {}
