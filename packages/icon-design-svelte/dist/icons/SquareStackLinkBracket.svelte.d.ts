import { SvelteComponent } from 'svelte';

export interface SquareStackLinkBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLinkBracket extends SvelteComponent<SquareStackLinkBracketProps> {}
