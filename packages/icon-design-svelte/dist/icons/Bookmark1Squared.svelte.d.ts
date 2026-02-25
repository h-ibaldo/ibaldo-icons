import { SvelteComponent } from 'svelte';

export interface Bookmark1SquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Squared extends SvelteComponent<Bookmark1SquaredProps> {}
