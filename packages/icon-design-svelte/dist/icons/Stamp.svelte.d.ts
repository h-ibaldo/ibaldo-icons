import { SvelteComponent } from 'svelte';

export interface StampProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Stamp extends SvelteComponent<StampProps> {}
