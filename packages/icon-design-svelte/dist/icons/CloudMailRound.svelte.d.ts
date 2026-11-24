import { SvelteComponent } from 'svelte';

export interface CloudMailRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMailRound extends SvelteComponent<CloudMailRoundProps> {}
