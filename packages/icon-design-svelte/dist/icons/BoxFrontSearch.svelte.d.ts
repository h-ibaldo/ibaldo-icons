import { SvelteComponent } from 'svelte';

export interface BoxFrontSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFrontSearch extends SvelteComponent<BoxFrontSearchProps> {}
