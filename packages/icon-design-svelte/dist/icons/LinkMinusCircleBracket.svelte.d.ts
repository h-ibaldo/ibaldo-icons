import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleBracket extends SvelteComponent<LinkMinusCircleBracketProps> {}
