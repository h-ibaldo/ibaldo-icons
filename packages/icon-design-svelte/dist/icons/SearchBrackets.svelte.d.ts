import { SvelteComponent } from 'svelte';

export interface SearchBracketsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchBrackets extends SvelteComponent<SearchBracketsProps> {}
