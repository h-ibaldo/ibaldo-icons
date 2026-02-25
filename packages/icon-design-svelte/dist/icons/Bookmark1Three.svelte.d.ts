import { SvelteComponent } from 'svelte';

export interface Bookmark1ThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Three extends SvelteComponent<Bookmark1ThreeProps> {}
