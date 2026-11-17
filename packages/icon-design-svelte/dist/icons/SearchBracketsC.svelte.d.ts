import { SvelteComponent } from 'svelte';

export interface SearchBracketsCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchBracketsC extends SvelteComponent<SearchBracketsCProps> {}
