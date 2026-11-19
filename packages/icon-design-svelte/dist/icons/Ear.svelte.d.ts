import { SvelteComponent } from 'svelte';

export interface EarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Ear extends SvelteComponent<EarProps> {}
