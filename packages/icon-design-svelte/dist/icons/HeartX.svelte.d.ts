import { SvelteComponent } from 'svelte';

export interface HeartXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartX extends SvelteComponent<HeartXProps> {}
