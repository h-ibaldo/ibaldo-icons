import { SvelteComponent } from 'svelte';

export interface BellXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellX extends SvelteComponent<BellXProps> {}
