import { SvelteComponent } from 'svelte';

export interface Image6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image6 extends SvelteComponent<Image6Props> {}
