import { SvelteComponent } from 'svelte';

export interface CloudRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRound extends SvelteComponent<CloudRoundProps> {}
