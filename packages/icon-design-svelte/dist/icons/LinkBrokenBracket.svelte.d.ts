import { SvelteComponent } from 'svelte';

export interface LinkBrokenBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBracket extends SvelteComponent<LinkBrokenBracketProps> {}
