import { SvelteComponent } from 'svelte';

export interface PlugBoltThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlugBoltThick extends SvelteComponent<PlugBoltThickProps> {}
