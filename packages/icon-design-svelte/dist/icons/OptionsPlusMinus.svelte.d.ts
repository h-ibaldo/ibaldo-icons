import { SvelteComponent } from 'svelte';

export interface OptionsPlusMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsPlusMinus extends SvelteComponent<OptionsPlusMinusProps> {}
