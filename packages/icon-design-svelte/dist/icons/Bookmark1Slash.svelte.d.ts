import { SvelteComponent } from 'svelte';

export interface Bookmark1SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Slash extends SvelteComponent<Bookmark1SlashProps> {}
