import { SvelteComponent } from 'svelte';

export interface PlugSocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlugSocket extends SvelteComponent<PlugSocketProps> {}
