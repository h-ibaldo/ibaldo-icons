import { SvelteComponent } from 'svelte';

export interface Bookmark3ThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Three extends SvelteComponent<Bookmark3ThreeProps> {}
