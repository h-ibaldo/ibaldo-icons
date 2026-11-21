import { SvelteComponent } from 'svelte';

export interface PlugThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlugThick extends SvelteComponent<PlugThickProps> {}
