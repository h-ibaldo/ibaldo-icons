import { SvelteComponent } from 'svelte';

export interface Bookmark3TwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Two extends SvelteComponent<Bookmark3TwoProps> {}
