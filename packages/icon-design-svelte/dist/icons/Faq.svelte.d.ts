import { SvelteComponent } from 'svelte';

export interface FaqProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Faq extends SvelteComponent<FaqProps> {}
