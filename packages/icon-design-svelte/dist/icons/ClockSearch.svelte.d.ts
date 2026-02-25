import { SvelteComponent } from 'svelte';

export interface ClockSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSearch extends SvelteComponent<ClockSearchProps> {}
