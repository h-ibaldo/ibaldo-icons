import { SvelteComponent } from 'svelte';

export interface PlayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Play extends SvelteComponent<PlayProps> {}
