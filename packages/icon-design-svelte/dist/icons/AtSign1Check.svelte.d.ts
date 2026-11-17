import { SvelteComponent } from 'svelte';

export interface AtSign1CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1Check extends SvelteComponent<AtSign1CheckProps> {}
