import { SvelteComponent } from 'svelte';

export interface Bookmark2SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark2Slash extends SvelteComponent<Bookmark2SlashProps> {}
