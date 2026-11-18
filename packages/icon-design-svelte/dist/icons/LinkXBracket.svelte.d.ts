import { SvelteComponent } from 'svelte';

export interface LinkXBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXBracket extends SvelteComponent<LinkXBracketProps> {}
