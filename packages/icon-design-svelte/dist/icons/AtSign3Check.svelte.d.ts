import { SvelteComponent } from 'svelte';

export interface AtSign3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3Check extends SvelteComponent<AtSign3CheckProps> {}
