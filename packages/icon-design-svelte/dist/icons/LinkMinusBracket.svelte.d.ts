import { SvelteComponent } from 'svelte';

export interface LinkMinusBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusBracket extends SvelteComponent<LinkMinusBracketProps> {}
