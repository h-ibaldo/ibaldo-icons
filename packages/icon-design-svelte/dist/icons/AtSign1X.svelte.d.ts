import { SvelteComponent } from 'svelte';

export interface AtSign1XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1X extends SvelteComponent<AtSign1XProps> {}
