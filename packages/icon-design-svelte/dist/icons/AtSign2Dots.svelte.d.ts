import { SvelteComponent } from 'svelte';

export interface AtSign2DotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Dots extends SvelteComponent<AtSign2DotsProps> {}
