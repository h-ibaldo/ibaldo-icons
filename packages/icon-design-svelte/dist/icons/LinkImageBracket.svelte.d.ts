import { SvelteComponent } from 'svelte';

export interface LinkImageBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkImageBracket extends SvelteComponent<LinkImageBracketProps> {}
