import { SvelteComponent } from 'svelte';

export interface CableProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cable extends SvelteComponent<CableProps> {}
