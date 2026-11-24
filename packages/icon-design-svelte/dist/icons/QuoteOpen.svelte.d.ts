import { SvelteComponent } from 'svelte';

export interface QuoteOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuoteOpen extends SvelteComponent<QuoteOpenProps> {}
