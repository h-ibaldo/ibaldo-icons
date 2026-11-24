import { SvelteComponent } from 'svelte';

export interface HandThumbDownSleeveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbDownSleeve extends SvelteComponent<HandThumbDownSleeveProps> {}
