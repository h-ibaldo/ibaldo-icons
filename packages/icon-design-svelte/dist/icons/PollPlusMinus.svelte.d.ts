import { SvelteComponent } from 'svelte';

export interface PollPlusMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollPlusMinus extends SvelteComponent<PollPlusMinusProps> {}
