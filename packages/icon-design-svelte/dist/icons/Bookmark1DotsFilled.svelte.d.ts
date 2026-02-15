import { SvelteComponent } from 'svelte';

export interface Bookmark1DotsFilledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1DotsFilled extends SvelteComponent<Bookmark1DotsFilledProps> {}
