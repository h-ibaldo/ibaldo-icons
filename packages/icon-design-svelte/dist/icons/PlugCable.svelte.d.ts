import { SvelteComponent } from 'svelte';

export interface PlugCableProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlugCable extends SvelteComponent<PlugCableProps> {}
