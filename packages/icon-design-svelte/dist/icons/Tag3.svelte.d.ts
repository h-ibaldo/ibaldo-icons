import { SvelteComponent } from 'svelte';

export interface Tag3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tag3 extends SvelteComponent<Tag3Props> {}
