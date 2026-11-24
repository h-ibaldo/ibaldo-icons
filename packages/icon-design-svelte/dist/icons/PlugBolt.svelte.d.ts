import { SvelteComponent } from 'svelte';

export interface PlugBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlugBolt extends SvelteComponent<PlugBoltProps> {}
