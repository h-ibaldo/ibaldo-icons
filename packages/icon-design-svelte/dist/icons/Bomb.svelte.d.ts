import { SvelteComponent } from 'svelte';

export interface BombProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bomb extends SvelteComponent<BombProps> {}
