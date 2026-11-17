import { SvelteComponent } from 'svelte';

export interface AtSign5XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5X extends SvelteComponent<AtSign5XProps> {}
