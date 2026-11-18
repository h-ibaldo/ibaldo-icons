import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleBracketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleBracket extends SvelteComponent<LinkCheckCircleBracketProps> {}
