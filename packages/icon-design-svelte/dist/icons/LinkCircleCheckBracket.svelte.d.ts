import { SvelteComponent } from 'svelte';

export interface LinkCircleCheckBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleCheckBracket extends SvelteComponent<LinkCircleCheckBracketProps> {}
