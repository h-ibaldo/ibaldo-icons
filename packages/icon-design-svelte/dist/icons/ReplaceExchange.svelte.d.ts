import { SvelteComponent } from 'svelte';

export interface ReplaceExchangeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReplaceExchange extends SvelteComponent<ReplaceExchangeProps> {}
