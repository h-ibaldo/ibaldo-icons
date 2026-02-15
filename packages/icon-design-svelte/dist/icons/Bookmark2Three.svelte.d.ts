import { SvelteComponent } from 'svelte';

export interface Bookmark2ThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Three extends SvelteComponent<Bookmark2ThreeProps> {}
