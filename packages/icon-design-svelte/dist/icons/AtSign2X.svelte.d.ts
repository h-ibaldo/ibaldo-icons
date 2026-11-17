import { SvelteComponent } from 'svelte';

export interface AtSign2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2X extends SvelteComponent<AtSign2XProps> {}
