import { SvelteComponent } from 'svelte';

export interface NewspaperCornerFoldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperCornerFold extends SvelteComponent<NewspaperCornerFoldProps> {}
