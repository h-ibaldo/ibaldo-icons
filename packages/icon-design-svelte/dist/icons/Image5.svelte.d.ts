import { SvelteComponent } from 'svelte';

export interface Image5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Image5 extends SvelteComponent<Image5Props> {}
