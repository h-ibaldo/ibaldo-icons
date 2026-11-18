import { SvelteComponent } from 'svelte';

export interface LinkDotsBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsBracket extends SvelteComponent<LinkDotsBracketProps> {}
