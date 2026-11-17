import { SvelteComponent } from 'svelte';

export interface LinkMenuBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuBracket extends SvelteComponent<LinkMenuBracketProps> {}
