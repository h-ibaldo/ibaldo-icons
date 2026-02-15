import { SvelteComponent } from 'svelte';

export interface Bookmark3SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3Slash extends SvelteComponent<Bookmark3SlashProps> {}
