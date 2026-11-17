import { SvelteComponent } from 'svelte';

export interface BombCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BombCap extends SvelteComponent<BombCapProps> {}
