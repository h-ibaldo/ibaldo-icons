import { SvelteComponent } from 'svelte';

export interface CloudWarningRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudWarningRound extends SvelteComponent<CloudWarningRoundProps> {}
