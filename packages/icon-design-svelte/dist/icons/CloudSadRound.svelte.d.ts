import { SvelteComponent } from 'svelte';

export interface CloudSadRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSadRound extends SvelteComponent<CloudSadRoundProps> {}
