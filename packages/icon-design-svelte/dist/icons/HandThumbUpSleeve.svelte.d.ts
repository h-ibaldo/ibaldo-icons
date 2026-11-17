import { SvelteComponent } from 'svelte';

export interface HandThumbUpSleeveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbUpSleeve extends SvelteComponent<HandThumbUpSleeveProps> {}
