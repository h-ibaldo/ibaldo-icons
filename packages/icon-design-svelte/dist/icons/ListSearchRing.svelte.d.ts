import { SvelteComponent } from 'svelte';

export interface ListSearchRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSearchRing extends SvelteComponent<ListSearchRingProps> {}
