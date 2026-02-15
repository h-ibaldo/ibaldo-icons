import { SvelteComponent } from 'svelte';

export interface UpvotePlusMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvotePlusMinus extends SvelteComponent<UpvotePlusMinusProps> {}
