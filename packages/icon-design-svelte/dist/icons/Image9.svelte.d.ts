import { SvelteComponent } from 'svelte';

export interface Image9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image9 extends SvelteComponent<Image9Props> {}
