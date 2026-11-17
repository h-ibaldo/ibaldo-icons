import { SvelteComponent } from 'svelte';

export interface LinkPlusBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusBracket extends SvelteComponent<LinkPlusBracketProps> {}
