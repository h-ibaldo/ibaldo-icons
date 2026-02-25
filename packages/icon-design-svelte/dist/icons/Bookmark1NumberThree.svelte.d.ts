import { SvelteComponent } from 'svelte';

export interface Bookmark1NumberThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1NumberThree extends SvelteComponent<Bookmark1NumberThreeProps> {}
