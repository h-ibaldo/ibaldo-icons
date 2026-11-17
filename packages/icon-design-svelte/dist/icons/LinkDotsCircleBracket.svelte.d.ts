import { SvelteComponent } from 'svelte';

export interface LinkDotsCircleBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsCircleBracket extends SvelteComponent<LinkDotsCircleBracketProps> {}
