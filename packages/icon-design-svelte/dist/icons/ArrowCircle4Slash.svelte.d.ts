import { SvelteComponent } from 'svelte';

export interface ArrowCircle4SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle4Slash extends SvelteComponent<ArrowCircle4SlashProps> {}
