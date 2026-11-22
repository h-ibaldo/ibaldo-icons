import { SvelteComponent } from 'svelte';

export interface BoxXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxX extends SvelteComponent<BoxXProps> {}
