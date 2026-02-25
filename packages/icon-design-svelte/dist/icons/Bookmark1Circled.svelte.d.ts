import { SvelteComponent } from 'svelte';

export interface Bookmark1CircledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Circled extends SvelteComponent<Bookmark1CircledProps> {}
