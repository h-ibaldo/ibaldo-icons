import { SvelteComponent } from 'svelte';

export interface PagesLinesTermsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PagesLinesTerms extends SvelteComponent<PagesLinesTermsProps> {}
