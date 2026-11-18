import { SvelteComponent } from 'svelte';

export interface BombFuseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BombFuse extends SvelteComponent<BombFuseProps> {}
