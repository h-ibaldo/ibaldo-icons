import { SvelteComponent } from 'svelte';

export interface BoxTapeArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxTapeArrowUp extends SvelteComponent<BoxTapeArrowUpProps> {}
