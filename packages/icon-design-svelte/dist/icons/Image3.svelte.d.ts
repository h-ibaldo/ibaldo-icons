import { SvelteComponent } from 'svelte';

export interface Image3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image3 extends SvelteComponent<Image3Props> {}
