import { SvelteComponent } from 'svelte';

export interface EqualsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Equals extends SvelteComponent<EqualsProps> {}
