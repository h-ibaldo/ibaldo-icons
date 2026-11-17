import { SvelteComponent } from 'svelte';

export interface AtSign4XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4X extends SvelteComponent<AtSign4XProps> {}
