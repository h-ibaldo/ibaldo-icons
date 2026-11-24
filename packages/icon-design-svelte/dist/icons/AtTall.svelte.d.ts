import { SvelteComponent } from 'svelte';

export interface AtTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtTall extends SvelteComponent<AtTallProps> {}
