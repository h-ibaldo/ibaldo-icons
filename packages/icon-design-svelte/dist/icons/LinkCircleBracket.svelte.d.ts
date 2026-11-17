import { SvelteComponent } from 'svelte';

export interface LinkCircleBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleBracket extends SvelteComponent<LinkCircleBracketProps> {}
