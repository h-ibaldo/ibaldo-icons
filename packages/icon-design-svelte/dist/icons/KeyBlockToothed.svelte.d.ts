import { SvelteComponent } from 'svelte';

export interface KeyBlockToothedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyBlockToothed extends SvelteComponent<KeyBlockToothedProps> {}
