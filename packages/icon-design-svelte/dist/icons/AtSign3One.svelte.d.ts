import { SvelteComponent } from 'svelte';

export interface AtSign3OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3One extends SvelteComponent<AtSign3OneProps> {}
