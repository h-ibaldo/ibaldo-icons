import { SvelteComponent } from 'svelte';

export interface AtMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtMinus extends SvelteComponent<AtMinusProps> {}
