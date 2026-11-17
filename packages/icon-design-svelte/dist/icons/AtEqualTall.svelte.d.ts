import { SvelteComponent } from 'svelte';

export interface AtEqualTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtEqualTall extends SvelteComponent<AtEqualTallProps> {}
