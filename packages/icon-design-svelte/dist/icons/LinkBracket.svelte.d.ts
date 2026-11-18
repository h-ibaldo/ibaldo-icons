import { SvelteComponent } from 'svelte';

export interface LinkBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBracket extends SvelteComponent<LinkBracketProps> {}
