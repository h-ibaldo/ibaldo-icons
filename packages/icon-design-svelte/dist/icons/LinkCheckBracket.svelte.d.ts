import { SvelteComponent } from 'svelte';

export interface LinkCheckBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckBracket extends SvelteComponent<LinkCheckBracketProps> {}
