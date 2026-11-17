import { SvelteComponent } from 'svelte';

export interface CloudXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudXRound extends SvelteComponent<CloudXRoundProps> {}
