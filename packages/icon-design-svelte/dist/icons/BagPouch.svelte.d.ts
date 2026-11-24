import { SvelteComponent } from 'svelte';

export interface BagPouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagPouch extends SvelteComponent<BagPouchProps> {}
