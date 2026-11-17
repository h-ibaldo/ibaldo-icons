import { SvelteComponent } from 'svelte';

export interface AtSign1OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1One extends SvelteComponent<AtSign1OneProps> {}
