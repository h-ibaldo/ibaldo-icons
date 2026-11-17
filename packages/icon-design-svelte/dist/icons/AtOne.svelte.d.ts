import { SvelteComponent } from 'svelte';

export interface AtOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtOne extends SvelteComponent<AtOneProps> {}
