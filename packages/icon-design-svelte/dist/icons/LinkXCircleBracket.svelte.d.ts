import { SvelteComponent } from 'svelte';

export interface LinkXCircleBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCircleBracket extends SvelteComponent<LinkXCircleBracketProps> {}
