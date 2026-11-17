import { SvelteComponent } from 'svelte';

export interface BoxLidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxLid extends SvelteComponent<BoxLidProps> {}
