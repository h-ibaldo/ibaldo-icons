import { SvelteComponent } from 'svelte';

export interface PlugProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Plug extends SvelteComponent<PlugProps> {}
