import { SvelteComponent } from 'svelte';

export interface DollarSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DollarSearch extends SvelteComponent<DollarSearchProps> {}
