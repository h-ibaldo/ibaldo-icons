import { SvelteComponent } from 'svelte';

export interface KeyBlockSmoothProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyBlockSmooth extends SvelteComponent<KeyBlockSmoothProps> {}
