import { SvelteComponent } from 'svelte';

export interface AtXTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtXTall extends SvelteComponent<AtXTallProps> {}
