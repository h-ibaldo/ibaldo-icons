import { SvelteComponent } from 'svelte';

export interface Image8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image8 extends SvelteComponent<Image8Props> {}
