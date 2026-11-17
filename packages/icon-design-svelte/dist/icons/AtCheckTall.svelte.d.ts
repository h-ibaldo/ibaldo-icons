import { SvelteComponent } from 'svelte';

export interface AtCheckTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCheckTall extends SvelteComponent<AtCheckTallProps> {}
