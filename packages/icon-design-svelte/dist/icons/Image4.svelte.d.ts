import { SvelteComponent } from 'svelte';

export interface Image4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image4 extends SvelteComponent<Image4Props> {}
