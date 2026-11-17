import { SvelteComponent } from 'svelte';

export interface Image7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image7 extends SvelteComponent<Image7Props> {}
