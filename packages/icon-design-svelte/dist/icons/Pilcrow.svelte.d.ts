import { SvelteComponent } from 'svelte';

export interface PilcrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Pilcrow extends SvelteComponent<PilcrowProps> {}
