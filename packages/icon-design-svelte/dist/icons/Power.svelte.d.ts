import { SvelteComponent } from 'svelte';

export interface PowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Power extends SvelteComponent<PowerProps> {}
