import { SvelteComponent } from 'svelte';

export interface BoxSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxSearch extends SvelteComponent<BoxSearchProps> {}
