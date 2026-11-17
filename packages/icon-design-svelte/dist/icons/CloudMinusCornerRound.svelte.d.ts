import { SvelteComponent } from 'svelte';

export interface CloudMinusCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMinusCornerRound extends SvelteComponent<CloudMinusCornerRoundProps> {}
